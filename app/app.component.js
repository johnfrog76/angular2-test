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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Webster Quartet';
        this.navToggle = false;
        this.pageStr = '';
    }
    AppComponent.prototype.toggleClass = function () {
        this.navToggle = !this.navToggle;
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div id=\"navbar\" class=\"navbar navbar-inverse ng-scope\" ui-view=\"primarynav\">\n        <div class=\"navbar-header ng-scope\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleClass()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/welcome\">{{title}}</a>\n         </div>\n         <div class=\"collapse navbar-collapse ng-scope\" [class.in]=\"navToggle\">\n            <ul class=\"nav navbar-nav\">\n                <li routerLinkActive=\"active\"><a routerLink=\"/welcome\" (click)=\"toggleClass()\">Welcome</a></li>\n                <li routerLinkActive=\"active\"><a routerLink=\"/bios\"  (click)=\"toggleClass()\">Bios</a></li>\n                <li routerLinkActive=\"active\"><a routerLink=\"/music\" (click)=\"toggleClass()\">Music</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n    </div>\n  ",
            styleUrls: ['app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map