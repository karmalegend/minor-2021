import { LewisLoserPipe } from './lewis-loser.pipe';

describe('Pipe: LewisLoser', () => { // [TestClass]
	let sut: LewisLoserPipe;

	beforeEach(() => { // [TestInitialize]
		sut = new LewisLoserPipe(); // system under test
	});

	it('should leave all string values other than Lewis alone', () => { // [TestMethod]
		expect(sut.transform('Bassie')).toBe('Bassie');
	});

	it('should change Lewis to Loser', () => { // [TestMethod]
		expect(sut.transform('Lewis')).toBe('Loser');
	});

	it('should react to everything Lewis', () => { // [TestMethod]
		expect(sut.transform('LEWis')).toBe('Loser');
	});

	it('should leave all string values other than Lewis alone', () => { // [TestMethod]
		expect(sut.transform(undefined)).toBe(undefined);
	});
});
