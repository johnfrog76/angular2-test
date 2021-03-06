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
var Rx_1 = require('rxjs/Rx');
var http_1 = require('@angular/http');
var SongService = (function () {
    function SongService(jsonp) {
        this.jsonp = jsonp;
        this.songsUrl = 'http://katie.sbtest.com/api/?mode=songs&callback=JSONP_CALLBACK';
    }
    SongService.prototype.getSongs = function () {
        return this.jsonp.get(this.songsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SongService.prototype.extractData = function (res) {
        var body = res.json();
        var i;
        var len = body.length;
        for (i = 0; i < len; i++) {
            body[i].progress = 0;
            body[i].activeCls = false;
        }
        return body || {};
    };
    SongService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    SongService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], SongService);
    return SongService;
}());
exports.SongService = SongService;
//# sourceMappingURL=song.service.js.map