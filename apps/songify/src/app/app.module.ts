import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular-production/material';
import { CoreDataModule } from '@angular-production/core-data';
import { AppRoutingModule } from './app-routing.module';
import { SongsComponent } from './songs/songs.component';
import { HomeComponent } from './home/home.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongsDetailsComponent } from './songs/songs-details/songs-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SongsComponent,
    HomeComponent,
    SongsListComponent,
    SongsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
