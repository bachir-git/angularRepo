import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   title = "MyApplication";
   showHideSideBar = false;
   
  constructor(private authenticate: AuthentificationService,
    private router: Router){}
    
  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }

  ngOnInit(){
    if(!this.authenticate.isUserLoggedIn()){
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/home']);
    }
  }
}