// promises vs obserables?
// - promises zijn awaitable
// - promises - then(), observables - subscribe()
// - promises zijn single event
// - observables kun je meer zien als een stream van event/data
// - promises zijn eager, observables zijn lazy

let prom = new Promise((resolve, reject) => {
	// async werk
	console.log('Promise starten');

	setTimeout(() => {
		console.log('Promise klaar!');
		resolve(4);
		resolve(8);
		resolve(15);
		resolve(16);
		resolve(23);
		resolve(42);
	}, 2000);
});
// prom.then(result => console.log('Promise result:', result));

// Immediately Invoked Arrow Function Expression
// (async () => {
// 	let result = await prom;
// 	console.log('Promise awaited result:', result);
// })();




let source = new rxjs.Observable(subject => {
	// async werk
	console.log('Observable starten');

	setTimeout(() => {
		console.log('Observable klaar!');
		subject.next(4);
		subject.next(8);
		subject.next(15);

		setTimeout(() => {
			console.log('en nu de laatste dingen');
			subject.next(16);
			subject.next(23);
			subject.next(42);
		}, 2000);

	}, 2000);
});
let subscription = source.subscribe(result => console.log('Observable result:', result));

setTimeout(() => {
	console.log('fuck de rest');
	subscription.unsubscribe();
}, 3000);