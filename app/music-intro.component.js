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
var MusicIntroComponent = (function () {
    function MusicIntroComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
        this.pages = [];
    }
    MusicIntroComponent.prototype.getPages = function () {
        var _this = this;
        this.pageService.getPages('music')
            .subscribe(function (pages) { return _this.pages = pages; });
    };
    MusicIntroComponent.prototype.ngOnInit = function () {
        this.getPages();
    };
    MusicIntroComponent = __decorate([
        core_1.Component({
            selector: 'music-intro',
            template: "\n        <h1>Music</h1>\n        <div class=\"music-intro\">\n            <p *ngFor=\"let page of pages\">\n              {{page.text}}\n          </p>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_service_1.PageService])
    ], MusicIntroComponent);
    return MusicIntroComponent;
}());
exports.MusicIntroComponent = MusicIntroComponent;
//# sourceMappingURL=music-intro.component.js.map