# Lab: Components

Our contact component is bloated! We'll be dividing the logic into two components: a `<contact-form>` and a `<contact-list>`.

```html
<app-root>
	<contact-form (add)="addContact($event)"></contact-form>
	<contact-list></contact-list>
</app-root>
```

## Exercise 1: Splitting up components

Let's place the form of our page in a new `<contact-form>` component.

1. Create a file `contact-form.component.ts` in `src/app/components/contact-form` and add the skeleton of a component.

    ```ts
    import { Component } from '@angular/core';

    @Component({
        selector: 'contact-form',
        templateUrl: './contact-form.component.html'
    })
    export class ContactFormComponent{
        constructor() { }
    }
    ```

1. Also create the `contact-form.component.html`. Leave it empty for now.

1. Register this component with the module:

    ```ts
	import { ContactFormComponent } from './components/contact-form/contact-form.component';

    @NgModule({
        imports: [...],
        declarations: [..., ContactFormComponent],
        exports: [...]
    })
    export class AppModule { }
    ```

1. The component will let its surrounding component know when a contact has been added by using an `@Output()` `EventEmitter`.
     ```ts
    export class ContactFormComponent {
        @Output() add = new EventEmitter<Contact>();
    ```
    
    Remember to import `Output()` and `EventEmitter`.

    ```ts
    import { Component, Output, EventEmitter } from '@angular/core';
    ```
    
1. Move the form HTML to the `contact-form.component.html`.
1. Move the form validation logic and the submission handling to the `ContactFormComponent`. Only, instead of directly adding to the list, use the `Output()` variable to emit that a new contact has been added:
    ```ts
    addContact() {
        this.add.emit(this.addContactForm.value);
    }
    ```
1. In `src/app/app.component.html`, include the new component and register for the custom event.

    ```html
    <contact-form (add)="addContact($event)"></contact-form>
    ```

    Modify this `addContact()` to correctly work with the contact parameter being passed in.

Our new component should now be working!

## Exercise 2: Splitting up more

Do the same thing for the table on our `AppComponent` by creating a `<contact-list>` component.
