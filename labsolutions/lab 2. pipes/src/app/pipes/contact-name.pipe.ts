import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact';

@Pipe({
	name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {
	transform(contact: Contact) {
		return `${contact.firstName} ${contact.surname}`;
	}
}