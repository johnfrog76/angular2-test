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
            <a class="navbar-brand" routerLink="/welcome">{{title}}</a>
         </div>
         <div class="collapse navbar-collapse ng-scope" [class.in]="navToggle">
            <ul class="nav navbar-nav">
                <li routerLinkActive="active"><a routerLink="/welcome" (click)="toggleClass()">Welcome</a></li>
                <li routerLinkActive="active"><a routerLink="/bios"  (click)="toggleClass()">Bios</a></li>
                <li routerLinkActive="active"><a routerLink="/music" (click)="toggleClass()">Music</a></li>
            </ul>
        </div>
    </div>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    <common-footer></common-footer>
  `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  title = 'WEBSTER QUARTET';
  navToggle: boolean = false;
  pageStr = '';

  toggleClass (): void {
      this.navToggle = !this.navToggle;
  };
}
