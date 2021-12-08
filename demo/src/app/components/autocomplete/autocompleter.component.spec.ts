import { TestBed } from '@angular/core/testing';
import { NavigateService } from 'src/app/services/navigate.service';
import { AutocompleteComponent } from './autocomplete.component';

describe('Component: Autocomplete', () => {
	let sut: AutocompleteComponent;
	let navigateServiceMock: jasmine.SpyObj<NavigateService>;

	beforeEach(() => {
		navigateServiceMock = jasmine.createSpyObj('navigateService', ['next']);
		// navigateServiceMock.next.and.

		TestBed.configureTestingModule({
			declarations: [AutocompleteComponent],
			imports: [],
			providers: [
				{ provide: NavigateService, useValue: navigateServiceMock }
			]
		});
		sut = TestBed.createComponent(AutocompleteComponent).componentInstance;
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

	it('should use the NavigateService for nexting', () => {
		sut.data = [{ x: 'hoi' }, { x: 'hey' }, { x: 'hallo' }];
		sut.query.setValue('o');
		sut.autocomplete();
		
		sut.next();

		expect(navigateServiceMock.next).toHaveBeenCalledWith(jasmine.any(Array));
	});

	it('should support selecting items', () => {
		spyOn(sut.select, 'emit'); // mock
		sut.suggestions = [{ x: 'hoi', highlight: true }, { x: 'hey' }, { x: 'hallo' }];

		sut.selectItem();

		expect(sut.select.emit).toHaveBeenCalledWith({ x: 'hoi' });
	});
});
