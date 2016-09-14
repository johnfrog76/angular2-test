import { Song } from './song';
import { SONGS } from './mock-songs';
import { Injectable } from '@angular/core';

@Injectable()
export class SongService {
    getSongs(): Promise<Song[]> {
        return Promise.resolve(SONGS);
    }

    getSong(id: number): Promise<Song> {
        return this.getSongs()
            .then(songs => songs.find(song => song.id === id));
    }
}
