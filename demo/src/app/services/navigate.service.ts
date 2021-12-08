import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigateService {
	next(data: any[]) {
		let index = data.findIndex((x) => x.highlight);
		if (index > -1) {
			delete data[index].highlight;
			data[(index + 1) % data.length].highlight = true;
			return;
		}

		data[0].highlight = true;
	}
}
