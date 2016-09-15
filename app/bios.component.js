"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var bio_service_1 = require('./bio.service');
var BiosComponent = (function () {
    function BiosComponent(router, bioService) {
        this.router = router;
        this.bioService = bioService;
    }
    BiosComponent.prototype.getBios = function () {
        var _this = this;
        this.bioService.getBios()
            .subscribe(function (bios) { return _this.bios = bios; });
    };
    BiosComponent.prototype.ngOnInit = function () {
        this.getBios();
    };
    BiosComponent = __decorate([
        core_1.Component({
            selector: 'my-bios',
            templateUrl: 'app/bios.component.html',
            styleUrls: ['app/bios.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, bio_service_1.BioService])
    ], BiosComponent);
    return BiosComponent;
}());
exports.BiosComponent = BiosComponent;
//# sourceMappingURL=bios.component.js.map