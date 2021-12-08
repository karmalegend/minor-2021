import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
	selector: 'app-autocomplete',
	templateUrl: './autocomplete.component.html',
	styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
	@Input() data!: any[]; // generic component is secretly the way to go / data pollution
	@Output() select = new EventEmitter(); // also supports generics

	query = new FormControl();
	suggestions?: any[];


	constructor(private navigateService: NavigateService) {

	}

	autocomplete() {
		this.suggestions = [];

		for (let item of this.data) {
			for (let prop of Object.keys(item)) {
				if (
					item[prop] &&
					item[prop]
						.toString()
						.toLowerCase()
						.includes(this.query.value.toLowerCase())
				) {
					this.suggestions.push(item);
					break;
				}
			}
		}
	}

	next() {
		this.navigateService.next(this.suggestions!);
	}

	selectItem() {
		let item = this.suggestions!.find(x => x.highlight);
		delete item.highlight;
		this.select.emit(item);
	}
}
