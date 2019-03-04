///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthCallbackComponent } from '@src/app/app-auth-callback.component';
import { AppLayoutViewComponent } from '@src/app/modules/application/app-layout/app-layout.view.component';
import { AuthenticationGuardService } from '@src/app/core/auth/authentication-guard.service';

import { config } from '@src/app/app-routing.config';

const routes: Routes = [
    {
        path: 'auth-callback',
        component: AppAuthCallbackComponent
    },
    {
        path: '',
        component: AppLayoutViewComponent,
        canActivate: [AuthenticationGuardService],
        children: [
            {
                path: 'events',
                loadChildren: '@src/app/modules/events/events.module#EventsModule'
            }
        ]
    },
    ...config.routes,
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
