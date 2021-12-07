import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
	contacts: Contact[];
	selected: number[] = [];

	constructor(private contactService: ContactService) { }

	ngOnInit() {
		this.contactService.getContacts().subscribe(contacts => {
			this.contacts = contacts;
		});
	}

	editContact(contact: Contact) {
		contact.editing = true;
	}

	saveContact(contact: Contact) {
		contact.editing = false;
	}

	deleteContact(contact: Contact) {
		this.contactService.deleteContact(contact);
	}
}