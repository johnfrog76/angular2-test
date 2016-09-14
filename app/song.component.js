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
var song_service_1 = require('./song.service');
var SongsComponent = (function () {
    function SongsComponent(router, songsService) {
        this.router = router;
        this.songsService = songsService;
        this.songs = [];
    }
    SongsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.songsService.getSongs()
            .then(function (songs) { return _this.songs = songs; });
    };
    SongsComponent = __decorate([
        core_1.Component({
            selector: 'my-songs',
            templateUrl: 'app/song.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, song_service_1.SongService])
    ], SongsComponent);
    return SongsComponent;
}());
exports.SongsComponent = SongsComponent;
//# sourceMappingURL=song.component.js.map