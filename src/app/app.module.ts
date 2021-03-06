///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { CoreModule } from '@src/app/core/core.module';
import { SharedModule } from '@src/app/shared/shared.module';

import { AppComponent } from '@src/app/app.component';
import { AppAuthCallbackComponent } from '@src/app/app-auth-callback.component';
import { ApplicationModule } from '@src/app/modules/application/application.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppLayoutViewModule } from '@src/app/modules/application/app-layout/app-layout.view.module';
import { AppConfigService } from '@src/app/core/app-config.service';

import { config, transformConfig } from '@src/app/app.config';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

const configMeta: NgModule = {
    providers: [AppConfigService, ...config.providers],
    declarations: [AppComponent, AppAuthCallbackComponent, ...config.declarations],
    imports: [
        AppLayoutViewModule,
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
        LayoutModule,
        CoreModule,
        SharedModule,
        ApplicationModule,
        AppRoutingModule,
        ...config.imports
    ],
    exports: [...config.exports],
    entryComponents: [...config.entryComponents],
    bootstrap: [AppComponent, ...config.bootstrap],
    schemas: [...config.schemas],
    id: config.id,
    jit: config.jit
};

transformConfig(configMeta);

@NgModule(configMeta)
export class AppModule {}
