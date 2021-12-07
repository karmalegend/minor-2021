import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm } from '@angular/forms';

function emailValidator(control: AbstractControl) {
	// required validator should handle empty values
	if (!control.value) {
		return null;
	}

	let regex = /^.+@.+\.[a-zA-Z]+$/;
	return regex.test(control.value) ? null : { email: { valid: false } };
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	newContact = {} as Contact;

	addContactForm: FormGroup;

	contacts: Contact[] = [
		{ firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
		{ firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
		{ firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
	];

	constructor(private fb: FormBuilder) {
		this.addContactForm = this.fb.group({
			firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
			surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z -]+$')]],
			email: ['', [Validators.required, emailValidator]]
		});
	}

	addContact(form: NgForm) {
		this.contacts.push(this.newContact);
		this.newContact = {} as Contact;
		form.reset();
	}

	addContactReactive() {
		this.contacts.push(this.addContactForm.value);
		this.addContactForm.reset();
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