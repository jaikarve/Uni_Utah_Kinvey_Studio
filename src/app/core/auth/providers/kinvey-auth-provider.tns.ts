///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Injector } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { Kinvey, InvalidCredentialsError, NoActiveUserError } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from 'nativescript-angular/router';

import { AuthenticationProvider } from '@src/app/core/auth/providers/authentication-provider';

class User {
    userName: string;
    authToken: string;
    kinveySession: any;
}

export class KinveyAuthProvider extends AuthenticationProvider<User> {
    private routerExtensions: RouterExtensions;

    protected get sessionKey(): string {
        return 'kinvey.auth.' + this.settings.sessionKey;
    }

    constructor(settings: any, injector: Injector) {
        super(settings, injector);

        this.routerExtensions = injector.get(RouterExtensions);

        Kinvey.init();
    }

    isAuthenticated(): Observable<boolean> {
        return of(!!Kinvey.User.getActiveUser());
    }

    authenticate(): void {
        this.routerExtensions.navigate(['application', 'login'], { clearHistory: true });
    }

    signIn({ username, password }): Observable<any> {
        return from(Kinvey.User.login(username, password).catch(e => this.handlePromiseError(e)));
    }

    signOut(): Observable<void> {
        return from(Kinvey.User.logout().catch(e => this.handlePromiseError(e)));
    }

    signUp({ username, password, email }): Observable<any> {
        return from(Kinvey.User.signup({ username, password, email }).catch(e => this.handlePromiseError(e)));
    }

    resetPassword(email: string, options?: Kinvey.RequestOptions): Observable<any> {
        return from(Kinvey.User.resetPassword(email, options).catch(e => this.handlePromiseError(e)));
    }

    signInExternal(redirectUri?: string, authorizationGrant?: Kinvey.AuthorizationGrant, options?: Kinvey.RequestOptions): Observable<any> {
        return from(Kinvey.User.loginWithMIC(redirectUri, authorizationGrant, options).catch(e => this.handlePromiseError(e)));
    }

    protected signInRequest(credentials: any): Observable<any> {
        return of(null);
    }

    private handlePromiseError(error) {
        this.handleError(error);
        throw error;
    }

    private handleError(error) {
        if (error instanceof InvalidCredentialsError || error instanceof NoActiveUserError) {
            this.authenticate();
            return true;
        }

        return false;
    }
}
