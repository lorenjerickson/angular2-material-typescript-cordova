
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ConfigService {
	constructor(private http: Http) {

	}

	load(path: string): Promise<any> {
		return new Promise((resolve, reject) => {
			// TODO
			resolve();
		});
	}
}
