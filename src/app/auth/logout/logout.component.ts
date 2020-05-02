import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentificationService: 
    AuthentificationService, private router: Router) { }

  ngOnInit(): void {

    this.authentificationService.logOut();
    this.router.navigate(['login']);
  }

}
