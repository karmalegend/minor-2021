import { Contact } from '../models/contact';

export class ContactServiceMock {
	constructor() {
		spyOn(this as ContactServiceMock, 'getContacts').and.returnValue([]);
		spyOn(this as ContactServiceMock, 'addContact');
		// see also: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36661
	}

	getContacts() {
		return null;
	}

	addContact(newContact: Contact) {
		return null;
	}
}