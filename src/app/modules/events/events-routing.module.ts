///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsModuleComponent } from '@src/app/modules/events/events.module.component';
import { EventListViewComponent } from '@src/app/modules/events/event-list/event-list.view.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';
import { AuthorizationGuardService } from '@src/app/core/auth/authorization-guard.service';

import { config } from '@src/app/modules/events/events-routing.config';

const routes: Routes = [
    {
        path: '',
        component: EventsModuleComponent,
        canActivate: [AuthenticationGuardService, AuthorizationGuardService],
        canActivateChild: [AuthenticationGuardService],
        data: {
            authorization: {
                allowedRoles: []
            }
        },
        children: [
            {
                path: '',
                redirectTo: 'event-list',
                pathMatch: 'full'
            },
            {
                path: 'event-list',
                component: EventListViewComponent
            }
        ]
    },
    ...config.routes
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule {}
