import { Page } from './pageCls';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class PageService {

    constructor(private jsonp: Jsonp) { }
    private pageUrl = 'http://katie.sbtest.com/api/?mode=pages&callback=JSONP_CALLBACK';

    getPages(): Observable<Page[]> {
        return this.jsonp.get(this.pageUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let i: number;
        let key = 'welcome';
        let body = res.json();
        let retArray = [];

        for (i = 0; i  < body.length; i++) {
            if (body[i].name === key) {
                retArray = body[i].page_content.slice(0);
                break;
            }
        }
        return retArray;
    }

    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
