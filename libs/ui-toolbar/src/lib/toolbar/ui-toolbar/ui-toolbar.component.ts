import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'angular-production-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
})
export class UiToolbarComponent {
  @Output() sidenav = new EventEmitter();
}
