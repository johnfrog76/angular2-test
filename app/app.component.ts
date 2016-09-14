import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id="navbar" class="navbar navbar-inverse ng-scope" ui-view="primarynav">
        <div class="navbar-header ng-scope">
            <button type="button" class="navbar-toggle" (click)="toggleClass()">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" routerLink="/dashboard">{{title}}</a>
         </div>
         <div class="collapse navbar-collapse ng-scope" [class.in]="navToggle">
            <ul class="nav navbar-nav">
                <li><a routerLink="/dashboard" routerLinkActive="active" (click)="toggleClass()">Dashboard</a></li>
                <li><a routerLink="/bios" routerLinkActive="active" (click)="toggleClass()">Bios</a></li>
                <li><a routerLink="/music" routerLinkActive="active" (click)="toggleClass()">Music</a></li>
            </ul>
        </div>
    </div>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  title = 'Webster Quartet';
  navToggle = false;
  toggleClass (): void {
      this.navToggle = !this.navToggle;
  };
}
