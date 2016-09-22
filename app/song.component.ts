import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Song } from './song';
import { SongService } from './song.service';

@Component({
  selector: 'my-songs',
  templateUrl: 'app/song.component.html',
  styleUrls: ['app/song.component.css']
})
export class SongsComponent implements OnInit {
    songs: Song[];
    myInterval: any;

    constructor(
        private router: Router,
        private songService: SongService) { }

    getSongs() {
        this.songService.getSongs()
            .subscribe(
            songs => this.songs = songs
            );
    }

    startStop (stop, audioEle, song, scope): void {
        let setProgress = (song, scope): void => {
            let myAudio = (<HTMLAudioElement>document.getElementById(audioEle));
            let currentTime = myAudio.currentTime;
            let duration = myAudio.duration;
            let p: number = currentTime / duration * 100;

            if (p < 100) {
                song.progress = p;
            } else {
                clearInterval(scope.myInterval);
            }
        };

        if (stop) {
            clearInterval(this.myInterval);
        } else {
            let scope = this;

            this.myInterval = setInterval( () => {
                setProgress(song, scope);
            }, 1000, song, scope);
        }

    }

    pauseAll (): void {
        let audios = (document.getElementsByTagName('audio'));

        let i: number;
        let len = audios.length;

        for (i = 0; i < len; i++) {
            audios[i].pause();
            this.songs[i].activeCls = false;
        }
    }

    playSong(audioEle, btnId, progId, song): void {
        let audio = (<HTMLAudioElement>document.getElementById(audioEle));
        let btn = (<HTMLElement>document.getElementById(btnId));

        if (audio.paused === true) {
            this.pauseAll();
            audio.play();
            this.startStop(null, audioEle, song, null);
            song.activeCls = true;
            audio.onended = (): void => {
                song.activeCls = false;
                song.progress = 0;
            };
        } else {
            song.activeCls = false;
            this.pauseAll();
            this.startStop('stop', null, null, null);
        }
    }

    ngOnDestroy(): void {
        this.startStop('stop', null, null, null);
    }

    ngOnInit(): void {
        this.getSongs();
    }
}
