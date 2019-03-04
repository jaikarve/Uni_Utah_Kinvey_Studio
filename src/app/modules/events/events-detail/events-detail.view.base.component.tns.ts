///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, Injector } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { DocumentState } from '@src/app/core/data/state/document-state.interface';
import { Event } from '@src/app/data/event.model';
import { getEventConfig } from '@src/app/data/event.config';

@Component({
    templateUrl: './events-detail.view.component.html',
    styleUrls: ['./events-detail.view.component.css']
})
export class EventsDetailViewBaseComponent implements OnInit {
    public $config: any = {};

    public $eventsDetailService: MobileDataService<Event, DocumentState>;

    protected $route: ActivatedRoute;
    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$route = injector.get(ActivatedRoute);
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            eventsDetail: getEventConfig()
        };

        this.initDataServices(dataConfig);
    }

    public ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        // TODO: consider moving this functionality to separate service
        const routeParamStateChanges: Observable<DocumentState> = this.$route.paramMap.pipe(
            map((params: ParamMap) => ({ id: params.get('id') }))
        );

        this.$eventsDetailService = this.$serviceFactory.documentData<Event>(dataConfig.eventsDetail);
        this.$eventsDetailService.dataState.onChanges(routeParamStateChanges);
    }
}
