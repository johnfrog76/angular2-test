import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from './pageCls';
import { PageService } from './page.service';

@Component({
    selector: 'welcome',
    templateUrl: 'app/welcome.component.html',
    styleUrls: ['app/welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    pages: Page[] = [];

    constructor(
        private router: Router,
        private pageService: PageService) {
    }

    getPages() {
        this.pageService.getPages()
            .subscribe(
            pages => this.pages = pages
            );
    }

    ngOnInit(): void {
        this.getPages();
    }
}
