import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-autocomplete',
	templateUrl: './autocomplete.component.html',
	styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent {
	@Input() data!: any[]; // generic component is secretly the way to go / data pollution
	@Output() select = new EventEmitter(); // also supports generics

	query = new FormControl();
	suggestions?: any[];

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
		let index = this.suggestions!.findIndex((x) => x.highlight);
		if (index > -1) {
			delete this.suggestions![index].highlight;
			this.suggestions![(index + 1) % this.suggestions!.length].highlight = true;
			return;
		}

		this.suggestions![0].highlight = true;
	}

	selectItem() {
		let item = this.suggestions!.find(x => x.highlight);
		delete item.highlight;
		this.select.emit(item);
	}
}
