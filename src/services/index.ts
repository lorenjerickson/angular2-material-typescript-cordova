import {provide} from '@angular/core';
import {ConfigService} from './config/config';
import {LogService} from './log/log';

export const SERVICE_PROVIDERS: Array<any> = [
	provide(ConfigService, { useClass: ConfigService }),
	provide(LogService, { useClass: LogService })
];

export * from './config/config';
export * from './log/log';