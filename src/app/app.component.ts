import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authenticate: AuthentificationService,
    private router: Router){}
  ngOnInit(){
    if(!this.authenticate.isUserLoggedIn()){
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/home']);
    }
  }
}