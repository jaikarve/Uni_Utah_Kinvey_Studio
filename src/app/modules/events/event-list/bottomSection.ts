/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Component, Optional } from '@angular/core';
import { EventListViewComponent } from '@src/app/modules/events/event-list/event-list.view.component';

@Component({
    selector: 'ks-bottom-section',
    templateUrl: './bottomSection.html'
})
export class BottomSectionComponent {
    constructor(@Optional() public parent: EventListViewComponent) {}
}
