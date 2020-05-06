import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = ''
  password = ''
  invalidLogin = false
  errorMessage: string;

  constructor(private router: Router, private authenticationService: AuthentificationService) { }

  checkLogin() {
    if (this.authenticationService.authenticate(this.login, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
      this.errorMessage = 'Login ou mot de passe incorrect !';
  }
  ngOnInit(): void {
  }

}