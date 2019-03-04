///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Kinvey } from 'kinvey-nativescript-sdk';

import { KinveyServiceConfig } from '@src/app/core/data/kinvey-service-config';
import { Shuttle } from '@src/app/data/shuttle.model';

export function getShuttleConfig(): KinveyServiceConfig {
    return {
        dataProviderName: 'DefaultDataProvider',
        serverOperations: true,
        createModel: () => new Shuttle(),
        mapData: dataItem => {
            dataItem.Name = new Date(dataItem.Name);

            return dataItem;
        },
        collection: 'shuttles',
        dataStoreType: Kinvey.DataStoreType.Cache,
        loadOnDemand: true
    };
}
