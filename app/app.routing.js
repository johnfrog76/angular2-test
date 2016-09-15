"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var bios_component_1 = require('./bios.component');
var song_component_1 = require('./song.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'bios',
        component: bios_component_1.BiosComponent
    },
    {
        path: 'music',
        component: song_component_1.SongsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map