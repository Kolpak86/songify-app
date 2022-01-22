import { Song } from '@angular-production/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SongsService {
  songs: Song[] = [
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

  create(song: Song) {
    return (this.songs = [
      ...this.songs,
      Object.assign({}, song, { id: uuidv4() }),
    ]);
  }

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs.find((s) => s.id === id);
  }

  update(id: string, song: Song) {
    this.songs = this.songs.map((s) => (s.id === id ? song : s));
    return this.songs;
  }

  remove(id: string) {
    this.songs = this.songs.filter((s) => s.id !== id);
    return this.songs;
  }
}
