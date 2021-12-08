import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-lifecycle',
	template: 'hoi!',
})
export class LifecycleComponent implements OnInit, OnDestroy {
	@Input() message!: string;
	private intervalId?: ReturnType<typeof setInterval>;

	constructor() {
		// dependency injection
		console.log('[lifecycle] constructor', this.message);
	}

	ngOnInit() {
		// alle initializatiezaken
		console.log('[lifecycle] ngOnInit', this.message);

		this.intervalId = setInterval(
			() => console.log('hallo vanaf interval'),
			1000
		);
	}

	ngOnDestroy() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
		// connecties sluiten
		// - intervals
		// - sliding setTimeout()
		// - web sockets/webrtc/webtransport (HTTP/3)
		// - subscriptions
		// - camera API
		// - navigator.geolocation.watchPosition()
		// - bluetooth API
		// - indexed databse
		// - web workers
		console.log('[lifecycle] ngOnDestroy');
	}
}
