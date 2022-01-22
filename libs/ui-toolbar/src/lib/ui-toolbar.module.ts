import { NgModule } from '@angular/core';
import { UiToolbarComponent } from './toolbar/ui-toolbar/ui-toolbar.component';
import { MaterialModule } from '@angular-production/material';

@NgModule({
  imports: [MaterialModule],
  declarations: [UiToolbarComponent],
  exports: [UiToolbarComponent],
})
export class UiToolbarModule {}
