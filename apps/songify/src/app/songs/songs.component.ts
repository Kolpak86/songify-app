import { Song } from '@angular-production/api-interfaces';
import { SongService } from '@angular-production/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const mockSongs: Song[] = [
  {
    id: '1',
    title: 'Far Beyond The Sun',
    description: 'A neo classical song by Yngwie Malmsteen',
  },
  {
    id: '2',
    title: 'Sega Sunset',
    description: 'A witch house banger by non other than Lorn ',
  },
  {
    id: '3',
    title: 'Norton Commander',
    description: 'A chill alternative song by Men I Trust',
  },
];

const emptySong: Song = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'angular-production-songs',
  templateUrl: './songs.component.html',
})
export class SongsComponent implements OnInit {
  songs!: Song[];
  songs$!: Observable<Song[]>;
  selectedSong!: Song;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    // this.songs = mockSongs;
    this.songs$ = this.songService.all();
    this.selectedSong = emptySong;
  }

  selectSong(song: Song): void {
    this.selectedSong = song;
  }

  deleteSong(song: Song): void {
    this.songs = this.songs.filter((w) => w.id !== song.id);
    this.selectedSong = emptySong;
  }

  saveSong(song: Song): void {
    if (song.id) {
      this.updateSong(song);
    } else {
      this.createSong(song);
    }
  }

  updateSong(song: Song): void {
    this.songs = this.songs.map((w) => {
      return w.id === song.id ? song : w;
    });
    this.resetSongDetails();
  }

  createSong(song: Song): void {
    const newSong = {
      id: this.getRandomId(),
      title: song.title,
      description: song.description,
    };
    this.songs = [...this.songs, newSong];
    this.resetSongDetails();
  }

  getRandomId(): string {
    return Math.random().toString(36).substring(7);
  }

  resetSongDetails(): void {
    this.selectedSong = emptySong;
  }
}
