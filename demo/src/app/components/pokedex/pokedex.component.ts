import {
	Component,
	Input,
	OnInit,
	ChangeDetectionStrategy,
	DoCheck,
	ChangeDetectorRef,
} from '@angular/core';
import { Pokemon } from 'src/types';

@Component({
	selector: 'app-pokedex',
	templateUrl: './pokedex.component.html',
	styleUrls: ['./pokedex.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexComponent implements DoCheck {
	@Input() pokemon?: Pokemon;

	constructor(private cdr: ChangeDetectorRef) {}

	ngDoCheck(): void {
		console.log('checking!');

		if (this.pokemon && this.pokemon.name.length % 10 === 0) {
			this.cdr.markForCheck();
		}
	}

	getName(pokemon: Pokemon) {
		return pokemon.name;
	}
}
