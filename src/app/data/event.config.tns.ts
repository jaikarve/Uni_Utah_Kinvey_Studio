///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { Event } from '@src/app/data/event.model';

export function getEventConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Event(),
        mapData: dataItem => {
            dataItem.title = new Date(dataItem.title);
            dataItem.pubDate = new Date(dataItem.pubDate);
            dataItem.isoDate = new Date(dataItem.isoDate);

            return dataItem;
        },
        collection: 'events',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
