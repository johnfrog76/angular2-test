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
var page_service_1 = require('./page.service');
var WelcomeComponent = (function () {
    function WelcomeComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
        this.pages = [];
    }
    WelcomeComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService.getPages('welcome')
            .subscribe(function (pages) { return _this.pages = pages; });
    };
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'welcome',
            templateUrl: 'app/welcome.component.html',
            styleUrls: ['app/welcome.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_service_1.PageService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map