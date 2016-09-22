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
    function SongsComponent(router, songService) {
        this.router = router;
        this.songService = songService;
    }
    SongsComponent.prototype.getSongs = function () {
        var _this = this;
        this.songService.getSongs()
            .subscribe(function (songs) { return _this.songs = songs; });
    };
    SongsComponent.prototype.startStop = function (stop, audioEle, song, scope) {
        var setProgress = function (song, scope) {
            var myAudio = document.getElementById(audioEle);
            var currentTime = myAudio.currentTime;
            var duration = myAudio.duration;
            var p = currentTime / duration * 100;
            if (p < 100) {
                song.progress = p;
            }
            else {
                clearInterval(scope.myInterval);
            }
        };
        if (stop) {
            clearInterval(this.myInterval);
        }
        else {
            var scope_1 = this;
            this.myInterval = setInterval(function () {
                setProgress(song, scope_1);
            }, 1000, song, scope_1);
        }
    };
    SongsComponent.prototype.pauseAll = function () {
        var audios = (document.getElementsByTagName('audio'));
        var i;
        var len = audios.length;
        for (i = 0; i < len; i++) {
            audios[i].pause();
            this.songs[i].activeCls = false;
        }
    };
    SongsComponent.prototype.playSong = function (audioEle, btnId, progId, song) {
        var audio = document.getElementById(audioEle);
        var btn = document.getElementById(btnId);
        if (audio.paused === true) {
            this.pauseAll();
            audio.play();
            this.startStop(null, audioEle, song, null);
            song.activeCls = true;
            audio.onended = function () {
                song.activeCls = false;
                song.progress = 0;
            };
        }
        else {
            song.activeCls = false;
            this.pauseAll();
            this.startStop('stop', null, null, null);
        }
    };
    SongsComponent.prototype.ngOnDestroy = function () {
        this.startStop('stop', null, null, null);
    };
    SongsComponent.prototype.ngOnInit = function () {
        this.getSongs();
    };
    SongsComponent = __decorate([
        core_1.Component({
            selector: 'my-songs',
            templateUrl: 'app/song.component.html',
            styleUrls: ['app/song.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, song_service_1.SongService])
    ], SongsComponent);
    return SongsComponent;
}());
exports.SongsComponent = SongsComponent;
//# sourceMappingURL=song.component.js.map