/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { EventsListViewBaseComponent } from '@src/app/modules/events/events-list/events-list.view.base.component';

export class EventsListViewComponent extends EventsListViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
