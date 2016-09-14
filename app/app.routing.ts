import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { SongsComponent }      from './song.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'dashboard/:id',
        component: HeroDetailComponent
    },
    {
        path: 'bios',
        component: HeroesComponent
    },
    {
        path: 'music',
        component: SongsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
