import { Bio } from './bio';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class BioService {
    constructor(private jsonp: Jsonp) { }
    private biosUrl = 'http://katie.sbtest.com/api/?mode=bios&callback=JSONP_CALLBACK';

    getBios(): Observable<Bio[]> {
        return this.jsonp.get(this.biosUrl)
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
