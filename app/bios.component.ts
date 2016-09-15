import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bio } from './bio';
import { BioService } from './bio.service';

@Component({
    selector: 'my-bios',
    templateUrl: 'app/bios.component.html',
    styleUrls: ['app/bios.component.css']
})

export class BiosComponent implements OnInit {
    bios: Bio[];

    constructor(
        private router: Router,
        private bioService: BioService) { }

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
