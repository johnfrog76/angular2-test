import { Song } from './song';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class SongService {

    constructor(private jsonp: Jsonp) { }
    private songsUrl = 'http://katie.sbtest.com/api/?mode=songs&callback=JSONP_CALLBACK';

    getSongs(): Observable<Song[]> {
        return this.jsonp.get(this.songsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
