///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { AppConfigService } from '@src/app/core/app-config.service';

export const environmentBase = {
    appId: 'b2ecf1cf-93d8-4b4d-8d8c-a8b41cc3227b',
    appName: 'U_of_U_Studio_2',
    getDataProviders() {
        return AppConfigService.settings.dataProviders;
    },
    getAuthentication() {
        return AppConfigService.settings.authentication;
    }
};
