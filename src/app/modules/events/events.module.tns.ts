///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@src/app/shared/shared.module';
import { EventsRoutingModule } from '@src/app/modules/events/events-routing.module';

import { ChatViewViewComponent } from '@src/app/modules/events/chat-view/chat-view.view.component';
import { EventsDetailViewComponent } from '@src/app/modules/events/events-detail/events-detail.view.component';
import { EventsListViewComponent } from '@src/app/modules/events/events-list/events-list.view.component';

import { config, transformConfig } from '@src/app/modules/events/events.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [ChatViewViewComponent, EventsDetailViewComponent, EventsListViewComponent, ...config.declarations],
    imports: [CommonModule, SharedModule, EventsRoutingModule, ...config.imports],
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
