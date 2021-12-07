import { Component } from '@angular/core';
import { Contact } from './models/contact';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	contacts: Contact[] = [
		{ firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
		{ firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
		{ firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
	];

	addContact(newContact: Contact) {
		this.contacts.push(newContact);
	}
}
