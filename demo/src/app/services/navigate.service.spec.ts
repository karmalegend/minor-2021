import { NavigateService } from './navigate.service';

describe('Service: Navigate', () => {
	let sut: NavigateService;
	let data: any[];

	beforeEach(() => {
		sut = new NavigateService();
		data = [{ x: 'hoi' }, { x: 'hey' }, { x: 'hallo' }];
	});

	it('should support nexting to the first item', () => {
		sut.next(data);

		expect(data[0].highlight).toBe(true);
		expect(data.filter((x) => x.highlight).length).toBe(1);
	});

	it('should support nexting from the first item to the second item', () => {
		sut.next(data);
		sut.next(data);

		expect(data[1].highlight).toBe(true);
		expect(data.filter((x) => x.highlight).length).toBe(1);
	});

	it('should support nexting from last item to the first', () => {
		for (let item of data) {
			sut.next(data);
		}
		sut.next(data);

		expect(data[0].highlight).toBe(true);
		expect(data.filter((x) => x.highlight).length).toBe(1);
	});
});