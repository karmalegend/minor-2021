import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'JP';

	drivers = [
		{ id: 4, name: 'Maxie Verstappen', points: 369.5, photoUrl: 'https://cdn.nos.nl/image/2021/12/04/809027/1024x576a.jpg'},
		{ id: 8, name: 'Lewie Hamilton', points: 369.5, photoUrl: 'https://images0.persgroep.net/rcs/sUVHDWIHt8emMMjFB6SSNbho9Ac/diocontent/210600718/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8'},
		{ id: 15, name: 'Valttori Bottas', points: 312, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/F12019_Schloss_Gabelhofen_%2820%29.jpg'},
	];

  changeName() {
	  this.name += 'Paul';
  }

  addDriver() {
	  this.drivers.push({
		  id: 16,
		  name: 'Checo Perez',
		  points: 210,
		  photoUrl: 'https://images0.persgroep.net/rcs/ccLyZZfc0iWpy2PiB_LmawXZ-9I/diocontent/210640088/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8'
	  });
  }
}
