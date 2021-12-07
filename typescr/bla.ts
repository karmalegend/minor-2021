let x: number = 15;

x = 'bla';

let _this = 14;

let fatarrow = () => {
	console.log(this);
};

function BaseComponent() {

}

class AppComponent extends BaseComponent {

}
// IIFE: Immediately Invoked Function Expression

// async function doeIets() {

// }

interface Hoi {
	do();
}
class Iets implements Hoi {
	do() { }
}