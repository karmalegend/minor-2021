import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[copyColumn]' })
export class CopyColumnDirective {
	private selecting = false;
	private startTd: HTMLElement;

	@HostListener('mousedown', ['$event'])
	mousedown(e) {
		let td = this.findTdInHierarchy(e.target);
		if (td !== null) {
			this.selecting = true;
			this.startTd = td;
		}
	}

	@HostListener('mousemove', ['$event'])
	mousemove(e) {
		let td = this.findTdInHierarchy(e.target);
		if (this.selecting && td !== null) {
			// mark tds as being part of selection
			td.classList.add('in-selection');
		}
	}

	@HostListener('mouseup', ['$event'])
	mouseup(e) {
		this.selecting = false;

		let endTd = this.findTdInHierarchy(e.target);
		if (endTd !== null) {
			let tbody = endTd.closest('tbody');
			let startRow = this.startTd.parentElement;
			let endRow = endTd.parentElement;

			// remove all previous td copied/in-selection classes
			tbody
				.querySelectorAll('td')
				.forEach(td => td.classList.remove('copied', 'in-selection'));

			// determine row indexes for slicing away irrelevant rows
			let trs = [...tbody.querySelectorAll('tr')];
			let startRowIndex = trs.findIndex(row => row === startRow);
			let endRowIndex = trs.findIndex(row => row === endRow);

			// support selecting from bottom to top
			if (startRowIndex > endRowIndex) {
				let tempIndex = startRowIndex;
				startRowIndex = endRowIndex;
				endRowIndex = tempIndex;
			}

			let relevantTrs = trs.slice(startRowIndex, endRowIndex + 1);

			// get column index of th in order to get the column data
			let columnIndex = [...endRow.children].findIndex(column => column === endTd);
			let tds = relevantTrs.map(tr => tr.children[columnIndex]);

			// mark selected tds as copied
			tds.forEach(td => td.classList.add('copied'));

			// go through tds and get the texts to copy
			let values = tds.map(x => x.innerText).join(', ');
			navigator.clipboard.writeText(values).then(() => {
				console.log('copied items:', values);
			});
		}
	}

	private findTdInHierarchy(element: HTMLElement) {
		if (!element.parentElement) {
			return null;
		}
		if (element.tagName === 'TD') {
			return element;
		}
		return this.findTdInHierarchy(element.parentElement);
	}
}
