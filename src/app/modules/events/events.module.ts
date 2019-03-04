///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { EventsModuleComponent } from '@src/app/modules/events/events.module.component';
import { EventsRoutingModule } from '@src/app/modules/events/events-routing.module';
import { AppLayoutViewModule } from '@src/app/modules/application/app-layout/app-layout.view.module';
import { EventListViewModule } from '@src/app/modules/events/event-list/event-list.view.module';

import { config, transformConfig } from '@src/app/modules/events/events.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [EventsModuleComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, LayoutModule, AppLayoutViewModule, EventListViewModule, EventsRoutingModule, ...config.imports],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class EventsModule {}
