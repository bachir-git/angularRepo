import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSideBar: boolean;
  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private authentificationService : AuthentificationService, private router : Router) { }

  ngOnInit(): void {
  }
  
  afficherSideBar() {
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }

  logout(){
    this.authentificationService.logOut();
    this.router.navigateByUrl('/login');
  }
}
