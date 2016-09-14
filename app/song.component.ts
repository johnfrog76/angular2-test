import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Song } from './song';
import { SongService } from './song.service';

@Component({
  selector: 'my-songs',
  templateUrl: 'app/song.component.html'
  //styleUrls: ['app/song.component.css']
})
export class SongsComponent implements OnInit {

  songs: Song[] = [];

  constructor(
    private router: Router,
    private songsService: SongService) {
  }

  ngOnInit(): void {
    this.songsService.getSongs()
      .then(songs => this.songs = songs);
  }
}
