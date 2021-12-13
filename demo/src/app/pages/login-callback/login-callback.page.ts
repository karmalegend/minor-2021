import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.page.html'
})
export class LoginCallbackPage implements OnInit {

  constructor(private authService: AuthService) { }

  async ngOnInit() {
	  await this.authService.complete();
  }

}
