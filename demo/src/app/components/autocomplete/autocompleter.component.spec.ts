import { AutocompleteComponent } from './autocomplete.component';

describe('Component: Autocomplete', () => {
	let sut: AutocompleteComponent;

	beforeEach(() => {
		sut = new AutocompleteComponent();
	});

	it('should autocomplete a list of suggestions', () => {
		sut.data = [{ x: 'hoi' }, { x: 'hey' }, { x: 'hallo' }];
		sut.query.setValue('o');

		sut.autocomplete();

		expect(sut.suggestions).toEqual([{ x: 'hoi' }, { x: 'hallo' }]);
	});

	it('should handle different properties when autocompleting', () => {
		sut.data = [{ x: 'hoi' }, { p: 'hey' }, { z: 'hallo' }];
		sut.query.setValue('o');

		sut.autocomplete();

		expect(sut.suggestions).toEqual([{ x: 'hoi' }, { z: 'hallo' }]);
	});

	it('should handle different datatypes gracefully', () => {
		sut.data = [{ x: undefined }, { x: null }, { x: 594 }, { x: 'hoi' }];
		sut.query.setValue('o');

		sut.autocomplete();

		expect(sut.suggestions).toEqual([{ x: 'hoi' }]);
	});

	it('should only add items uniquely', () => {
		sut.data = [
			{ x: 'hoi', y: 'hallo' },
			{ x: 'hey', y: 'whatever' },
			{ x: 'hallo', y: 'zoit' },
		];
		sut.query.setValue('o');

		sut.autocomplete();

		expect(sut.suggestions).toEqual([
			{ x: 'hoi', y: 'hallo' },
			{ x: 'hallo', y: 'zoit' },
		]);
	});

	it('should autocomplete case-insensitively', () => {
		sut.data = [{ x: 'HOI' }, { x: 'hey' }, { x: 'hallo' }];
		sut.query.setValue('O');

		sut.autocomplete();

		expect(sut.suggestions).toEqual([{ x: 'HOI' }, { x: 'hallo' }]);
	});

	describe('nexting', () => {
		beforeEach(() => {
			sut.data = [{ x: 'hoi' }, { x: 'hey' }, { x: 'hallo' }];
			sut.query.setValue('h');
			sut.autocomplete();
		});

		it('should support nexting to the first item', () => {
			sut.next();

			expect(sut.suggestions![0].highlight).toBe(true);
			expect(sut.suggestions!.filter((x) => x.highlight).length).toBe(1);
		});

		it('should support nexting from the first item to the second item', () => {
			sut.next();
			sut.next();

			expect(sut.suggestions![1].highlight).toBe(true);
			expect(sut.suggestions!.filter((x) => x.highlight).length).toBe(1);
		});

		it('should support nexting from last item to the first', () => {
			for (let item of sut.suggestions!) {
				sut.next();
			}
			sut.next();

			expect(sut.suggestions![0].highlight).toBe(true);
			expect(sut.suggestions!.filter((x) => x.highlight).length).toBe(1);
		});
	});

	it('should support selecting items', () => {
		spyOn(sut.select, 'emit'); // mock
		sut.data = [{ x: 'hoi' }, { x: 'hey' }, { x: 'hallo' }];
		sut.query.setValue('o');
		sut.autocomplete();
		sut.next();

		sut.selectItem();

		expect(sut.select.emit).toHaveBeenCalledWith({ x: 'hoi' });
	});
});
