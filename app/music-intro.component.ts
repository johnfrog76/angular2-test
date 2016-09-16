import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from './pageCls';
import { PageService } from './page.service';

@Component({
    selector: 'music-intro',
    template: `
        <h1>Music</h1>
        <div class="music-intro">
            <p *ngFor="let page of pages">
              {{page.text}}
          </p>
        </div>
    `
})
export class MusicIntroComponent implements OnInit {

    pages: Page[] = [];

    constructor(
        private router: Router,
        private pageService: PageService) {
    }

    getPages() {
        this.pageService.getPages('music')
            .subscribe(
            pages => this.pages = pages
            );
    }

    ngOnInit(): void {
        this.getPages();
    }
}
