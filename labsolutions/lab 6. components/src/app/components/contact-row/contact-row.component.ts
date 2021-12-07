import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: '[contact-row]',
  templateUrl: './contact-row.component.html'
})
export class ContactRowComponent  {
  @Input('contact') contact: Contact;
  @Output() del = new EventEmitter<Contact>();

  constructor() { }

  edit() {
		this.contact.editing = true;
	}

	save() {
		this.contact.editing = false;
  }
  
  remove() {
    this.del.emit(this.contact);
  }

}
