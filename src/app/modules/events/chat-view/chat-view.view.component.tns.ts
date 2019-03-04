/////////////////////////////////////////////////////
// Add your custom code here.
// This file and any changes you make to it are preserved every time the app is generated.
/////////////////////////////////////////////////////
import { Inject, Injector } from '@angular/core';
import { ChatViewViewBaseComponent } from '@src/app/modules/events/chat-view/chat-view.view.base.component';

export class ChatViewViewComponent extends ChatViewViewBaseComponent {
    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }
}
