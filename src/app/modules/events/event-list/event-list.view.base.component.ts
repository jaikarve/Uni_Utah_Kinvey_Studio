///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { State } from '@progress/kendo-data-query';

import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { KsGridComponent } from '@src/app/shared/components/grid/grid.component';
import { ModelDataResult } from '@src/app/core/data/model-data-result';

import { DataService } from '@src/app/core/data/data.service';
import { DataServiceFactory } from '@src/app/core/data/data-service-factory';
import { KinveyDataServiceFactory } from '@src/app/core/data/kinvey-data-service-factory';
import { Event } from '@src/app/data/event.model';
import { getEventConfig } from '@src/app/data/event.config';

import { NotificationService } from '@src/app/core/notification/notification.service';
import { Notification } from '@src/app/core/notification/notification';

@Component({
    templateUrl: './event-list.view.component.html',
    styleUrls: ['./event-list.view.component.css']
})
export class EventListViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid')
    public $grid: KsGridComponent;

    public $kinveyDataServiceFactory: KinveyDataServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesState: { [key: string]: State } = {
        Events: {
            skip: 0,
            take: 20
        }
    };

    public $dataModels: any = {
        EventsModel: {}
    };

    public $config: any = {
        title: 'Events',
        titleKey: 'modules.Events.views.event_list.title',
        components: {
            grid: {
                filterable: false,
                groupable: false,
                pageable: this.$dataServicesState['Events'].take !== undefined,
                reorderable: false,
                resizable: false,
                sortable: false,
                commandColumnWidth: 220,
                editing: {
                    mode: 'ReadOnly'
                },
                confirmDelete: true,
                events: {
                    onRowSelect: e => {
                        this['onRowSelect'](e);
                    }
                }
            }
        }
    };

    constructor(public injector: Injector) {
        this.$kinveyDataServiceFactory = this.injector.get(KinveyDataServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);

        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            Events: this.$kinveyDataServiceFactory.getService<Event>(dsConfig['Events'], this.$dataServicesState['Events'])
        };

        this.$dataServicesData = {
            Events: this.getDataChanges('Events')
        };

        this.$dataServicesResult = {
            Events: this.getDataResult('Events')
        };
    }

    public ngOnInit(): void {
        this['onInit']();

        for (const dataSourceName of Object.keys(this.$dataServices)) {
            this.read(dataSourceName);
            this.dataServiceErrors(dataSourceName);
        }
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    public read(dataSourceName): void {
        this.$dataServices[dataSourceName].read();
    }

    public getDataChanges(dataSourceName): Observable<any[]> {
        const dataService = this.$dataServices[dataSourceName];
        return dataService.dataChanges.pipe(map(response => (response ? response.data : [])));
    }

    public getDataResult(dataSourceName): BehaviorSubject<ModelDataResult<any>> {
        return this.$dataServices[dataSourceName].dataChanges;
    }

    public dataServiceErrors(dataSourceName): void {
        this.$dataServices[dataSourceName].errors.subscribe((err: any) => {
            if (err) {
                const message = (err.error && err.error.message) || err.message;
                this.$notificationService.notify(new Notification(`<ul><li>${message}<li></ul>`, 'error', 10000));
            }
        });
    }

    protected getDataServicesConfig() {
        const config = {
            Events: getEventConfig()
        };

        return config;
    }
}
