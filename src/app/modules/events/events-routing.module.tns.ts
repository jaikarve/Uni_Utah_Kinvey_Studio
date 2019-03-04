///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { ChatViewViewComponent } from '@src/app/modules/events/chat-view/chat-view.view.component';
import { EventsDetailViewComponent } from '@src/app/modules/events/events-detail/events-detail.view.component';
import { EventsListViewComponent } from '@src/app/modules/events/events-list/events-list.view.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/modules/events/events-routing.config';

const routes: Routes = [
    {
        path: 'events-detail/:id',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        component: EventsDetailViewComponent
    },
    {
        path: 'chat-view',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        component: ChatViewViewComponent
    },
    {
        path: 'events-detail',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        component: EventsDetailViewComponent
    },
    {
        path: 'events-list',
        canActivate: [AuthenticationGuardService],
        canActivateChild: [AuthenticationGuardService],
        component: EventsListViewComponent
    },
    ...config.routes
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EventsRoutingModule {}
