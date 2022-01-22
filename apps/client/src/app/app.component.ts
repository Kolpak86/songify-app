import { Song } from '@angular-production/api-interfaces';
import { SongService } from '@angular-production/core-data';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  songs$!: Observable<Song[]>;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songs$ = this.songService.all();
  }
}
