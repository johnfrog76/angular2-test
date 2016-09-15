import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bio } from './bio';
import { BioService } from './bio.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    bios: Bio[] = [];

    constructor(
        private router: Router,
        private bioService: BioService) {
    }

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
