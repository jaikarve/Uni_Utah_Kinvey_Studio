///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from '@src/app/shared/shared.module';
import { EventListViewBaseComponent } from '@src/app/modules/events/event-list/event-list.view.base.component';
import { EventListViewComponent } from '@src/app/modules/events/event-list/event-list.view.component';
import { RouterModule } from '@angular/router';

import { BottomSectionComponent } from '@src/app/modules/events/event-list/bottomSection';
import { MiddleSectionComponent } from '@src/app/modules/events/event-list/middleSection';
import { TopSectionComponent } from '@src/app/modules/events/event-list/topSection';

import { config, transformConfig } from '@src/app/modules/events/event-list/event-list.view.config';

const configMeta: NgModule = {
    providers: [...config.providers],
    declarations: [
        EventListViewBaseComponent,
        EventListViewComponent,
        BottomSectionComponent,
        MiddleSectionComponent,
        TopSectionComponent,
        ...config.declarations
    ],
    imports: [CommonModule, SharedModule, LayoutModule, RouterModule, ...config.imports],
    exports: [BottomSectionComponent, MiddleSectionComponent, TopSectionComponent, ...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class EventListViewModule {}
