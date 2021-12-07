import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'lewis' })
export class LewisLoserPipe implements PipeTransform {
	transform(value: string | undefined) {
		return value?.toLowerCase() === 'lewis' ? 'Loser' : value;
	}
}
