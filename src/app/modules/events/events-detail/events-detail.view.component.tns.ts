/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { EventsDetailViewBaseComponent } from '@src/app/modules/events/events-detail/events-detail.view.base.component';

export class EventsDetailViewComponent extends EventsDetailViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
