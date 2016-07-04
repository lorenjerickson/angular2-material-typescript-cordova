
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LogService {
	constructor() {

	}

	debug(...args) {
		console.log('~~~ app:debug: ', args);
	}

	trace(...args) {
		console.log('~~~ app:trace: ', args);
	}

	error(...args) {
		console.log('~~~ app:error: ', args);
	}

	warning(...args) {
		console.log('~~~ app:warning: ', args);
	}
}
