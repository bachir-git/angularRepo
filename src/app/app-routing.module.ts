import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ListeUsersComponent } from './users/liste-users/liste-users.component';
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';




const routes: Routes = [
  {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
  {  path: 'login',  component: LoginComponent},
  {  path: 'home',   component: HomeComponent,
     children: [
      {  
        path: '', component: ListeProduitsComponent,
        outlet: 'homeOutlet',
   },
     ]
  },

  {  path: 'liste-users',  component: ListeUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
