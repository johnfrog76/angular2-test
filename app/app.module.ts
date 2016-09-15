import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { BiosComponent }      from './bios.component';
import { SongsComponent }      from './song.component';
import { BioService }          from './bio.service';
import { SongService }          from './song.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    BiosComponent,
    SongsComponent
  ],
  providers: [
    BioService,
    SongService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
