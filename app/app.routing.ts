import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { BiosComponent }      from './bios.component';
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
        path: 'bios',
        component: BiosComponent
    },
    {
        path: 'music',
        component: SongsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
