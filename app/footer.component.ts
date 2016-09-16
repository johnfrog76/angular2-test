import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from './pageCls';
import { PageService } from './page.service';

@Component({
    selector: 'common-footer',
    template: `
        <div class="footer">
            <div *ngFor="let page of pages" [innerHTML]="page.text"></div>
        </div>
    `,
    styleUrls: ['app/footer.component.css']
})
export class FooterComponent implements OnInit {

    pages: Page[] = [];

    constructor(
        private router: Router,
        private pageService: PageService) {
    }

    getPages() {
        this.pageService.getPages('footer')
            .subscribe(
            pages => this.pages = pages
            );
    }

    ngOnInit(): void {
        this.getPages();
    }
}
