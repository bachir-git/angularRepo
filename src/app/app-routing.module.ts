import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeProduitsComponent } from './produit/liste-produits/liste-produits.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [
  { path: '', canActivate: [AuthGaurdService], component: ListeProduitsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', canActivate: [AuthGaurdService], component: LogoutComponent },
  { path: 'produits', canActivate: [AuthGaurdService], component: ListeProduitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
