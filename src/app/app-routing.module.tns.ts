///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from 'nativescript-angular/router';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AppTabsComponent } from '@src/app/app-tabs.component';

import { config } from '@src/app/app-routing.config';

const routes: Routes = [
    { path: '', redirectTo: '_app', pathMatch: 'full' },
    {
        path: '_app',
        data: { enableDrawer: true },
        component: AppTabsComponent,
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        children: [
            {
                path: 'application',
                outlet: 'applicationHomeTab',
                component: NSEmptyOutletComponent,
                loadChildren: '@src/app/modules/application/application.module#ApplicationModule'
            },
            {
                path: 'events',
                outlet: 'eventsEventsListTab',
                component: NSEmptyOutletComponent,
                loadChildren: '@src/app/modules/events/events.module#EventsModule'
            },
            {
                path: 'events',
                outlet: 'eventsChatViewTab',
                component: NSEmptyOutletComponent,
                loadChildren: '@src/app/modules/events/events.module#EventsModule'
            }
        ]
    },
    {
        path: 'application',
        loadChildren: '@src/app/modules/application/application.module#ApplicationModule'
    },
    {
        path: 'events',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        loadChildren: '@src/app/modules/events/events.module#EventsModule'
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
