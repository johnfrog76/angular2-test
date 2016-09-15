import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bio } from './bios';
import { BioService } from './bios.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/welcome.component.html',
    styleUrls: ['app/welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    bio: Bio[];

    constructor(
        private router: Router,
        private bioService: biosService) { }

    getBios() {
        this.bioService.getBios()
            .subscribe(
            bios => this.bios = bios
            );
    }

    ngOnInit(): void {
        this.getBios();
    }
}
