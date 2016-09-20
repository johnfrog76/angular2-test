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
var platform_browser_1 = require('@angular/platform-browser');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./welcome.component');
var bios_component_1 = require('./bios.component');
var song_component_1 = require('./song.component');
var footer_component_1 = require('./footer.component');
var music_intro_component_1 = require('./music-intro.component');
var bio_intro_component_1 = require('./bio-intro.component');
var bio_service_1 = require('./bio.service');
var song_service_1 = require('./song.service');
var page_service_1 = require('./page.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                bios_component_1.BiosComponent,
                song_component_1.SongsComponent,
                footer_component_1.FooterComponent,
                music_intro_component_1.MusicIntroComponent,
                bio_intro_component_1.BioIntroComponent
            ],
            providers: [
                bio_service_1.BioService,
                song_service_1.SongService,
                page_service_1.PageService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map