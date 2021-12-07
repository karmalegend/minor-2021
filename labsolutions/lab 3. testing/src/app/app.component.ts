import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	newContact = {} as Contact;

	contacts: Contact[] = [
		{ firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
		{ firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
		{ firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
	];

	addContact() {
		this.contacts.push(this.newContact);
		this.newContact = {} as Contact;
	}

	editContact(contact: Contact) {
		contact.editing = true;
	}

	saveContact(contact: Contact) {
		contact.editing = false;
	}

	deleteContact(contact: Contact) {
		let index = this.contacts.indexOf(contact);
		this.contacts.splice(index, 1);
	}
}
