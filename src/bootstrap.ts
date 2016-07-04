import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './components';
import {SERVICE_PROVIDERS} from './services';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	SERVICE_PROVIDERS
]);