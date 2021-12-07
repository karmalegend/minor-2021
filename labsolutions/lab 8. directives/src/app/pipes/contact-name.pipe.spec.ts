import { ContactNamePipe } from './contact-name.pipe';
import { Contact } from '../models/contact';

describe('Pipe: ContactName', () => {
	let contactNamePipe: ContactNamePipe;

	beforeEach(() => {
		contactNamePipe = new ContactNamePipe();
	});

	it('should concatenate a contact name', () => {
		let c = { firstName: 'John', surname: 'Fish' } as Contact;
		expect(contactNamePipe.transform(c)).toBe('John Fish');
	});

	it('should handle undefined gracefully', () => {
		expect(contactNamePipe.transform(undefined)).toBe(undefined);
	});
});