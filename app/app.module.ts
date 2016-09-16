import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { BiosComponent } from './bios.component';
import { SongsComponent } from './song.component';
import { FooterComponent } from './footer.component';
import { MusicIntroComponent } from './music-intro.component';
import { BioIntroComponent } from './bio-intro.component';
import { BioService } from './bio.service';
import { SongService } from './song.service';
import { PageService } from './page.service';

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
    WelcomeComponent,
    BiosComponent,
    SongsComponent,
    FooterComponent,
    MusicIntroComponent,
    BioIntroComponent
  ],
  providers: [
    BioService,
    SongService,
    PageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
