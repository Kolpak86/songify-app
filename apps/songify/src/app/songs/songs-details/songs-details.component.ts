import { Song } from '@angular-production/api-interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'angular-production-songs-details',
  templateUrl: './songs-details.component.html',
})
export class SongsDetailsComponent {
  currentSong!: Song;
  songTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set song(value: Song) {
    if (value) this.songTitle = value.title;
    this.currentSong = { ...value };
    console.log(this.currentSong);
  }
}
