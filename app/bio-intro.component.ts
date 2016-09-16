import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Page } from './pageCls';
import { PageService } from './page.service';

@Component({
    selector: 'bio-intro',
    template: `
        <h1>Bios</h1>
        <div class="bio-intro">
            <p *ngFor="let page of pages">
              {{page.text}}
          </p>
        </div>
    `
})
export class BioIntroComponent implements OnInit {

    pages: Page[] = [];

    constructor(
        private router: Router,
        private pageService: PageService) {
    }

    getPages() {
        this.pageService.getPages('bios')
            .subscribe(
            pages => this.pages = pages
            );
    }

    ngOnInit(): void {
        this.getPages();
    }
}
