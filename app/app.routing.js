"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./welcome.component');
var bios_component_1 = require('./bios.component');
var song_component_1 = require('./song.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'bios',
        component: bios_component_1.BiosComponent,
        children: []
    },
    {
        path: 'music',
        component: song_component_1.SongsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map