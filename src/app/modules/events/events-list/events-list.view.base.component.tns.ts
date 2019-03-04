///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, OnInit } from '@angular/core';

import { DataServiceFactory } from '@src/app/core/data/data-service.factory';
import { MobileDataService } from '@src/app/core/data/mobile-data.service';
import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { CollectionState } from '@src/app/core/data/state/collection-state.interface';
import { Event } from '@src/app/data/event.model';
import { getEventConfig } from '@src/app/data/event.config';

@Component({
    templateUrl: './events-list.view.component.html',
    styleUrls: ['./events-list.view.component.css']
})
export class EventsListViewBaseComponent implements OnInit {
    public $config: any = {
        searchBar: {
            searchBy: ['creator', 'isoDate'],
            ignoreCase: true
        },
        listView: {
            navigateOnItemTap: {
                module: 'events',
                parameter: '',
                view: 'events-detail'
            }
        }
    };

    public $eventsService: MobileDataService<Event, CollectionState>;

    protected $serviceFactory: DataServiceFactory;

    constructor(public injector: Injector) {
        this.$serviceFactory = injector.get(DataServiceFactory);

        const dataConfig = {
            events: getEventConfig()
        };

        this.initDataServices(dataConfig);
    }

    ngOnInit(): void {}

    protected initDataServices(dataConfig: { [key: string]: KinveyServiceConfig }) {
        this.$eventsService = this.$serviceFactory.collectionData<Event>(dataConfig.events, {
            skip: 0,
            take: 20
        });
    }
}
