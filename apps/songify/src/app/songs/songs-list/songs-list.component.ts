import { Song } from '@angular-production/api-interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'angular-production-songs-list',
  templateUrl: './songs-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsListComponent {
  @Input() songs: Song[] | null = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
