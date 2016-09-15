import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent }   from './welcome.component';
import { BiosComponent }      from './bios.component';
import { SongsComponent }      from './song.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'bios',
        component: BiosComponent,
        children: [
            // {
            //   path: '',
            //   component: CrisisCenterHomeComponent
            // }
        ]
    },
    {
        path: 'music',
        component: SongsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
