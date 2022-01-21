import { Component } from '@angular/core';

@Component({
  selector: 'angular-production-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/songs', icon: 'view_list', title: 'Songs' },
  ];

  bannersIndex: number[] = [1, 2, 3, 4];
}
