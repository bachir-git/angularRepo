import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreerProduitComponent } from './produit/creer/creer-produit.component';
import { ListeUsersComponent } from './users/liste-users/liste-users.component';


const routes: Routes = [
  {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
  {  path: 'login',  component: LoginComponent},
  {  path: 'home',   component: HomeComponent,
     children: [
      {  
        path: '', component: ListeUsersComponent,
        outlet: 'homeOutlet',
   },
     ]
  },
  {  path: 'ajouter-produit',  component: CreerProduitComponent},
  {  path: 'liste-users',  component: ListeUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
