import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
	private url = 'http://localhost:9688/contacts';
	private contactSubject = new Subject<Contact[]>();

	constructor(private http: HttpClient) {}

	getContacts(): Observable<Contact[]> {
		this.http.get<Contact[]>(this.url).subscribe(contacts => {
			this.contactSubject.next(contacts);
		});

		// we're using a custom subject here so when adding, editing or
		// deleting contacts, we can use this same observable to notify subscribers
		// of changes.
		return this.contactSubject;
	}

	addContact(newContact: Contact) {
		// this REST-services returns the updated contact (id has been added).
		// we're simply adding it to the local array here, but you can also
		// do a new HTTP call where you retrieve a full list of contacts.
		// this does place more load on your server and it costs a bit more time,
		// but the data is then fully in sync with the server. All up to you.
		this.http.post(this.url, newContact).subscribe(() => this.getContacts());
	}

	deleteContact(contact: Contact) {
		this.http.delete(`${this.url}/${contact.id}`).subscribe(() => this.getContacts());
	}
}
