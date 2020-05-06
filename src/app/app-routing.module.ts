import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeProduitsComponent } from './produit/liste/liste-produits.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProduitResolver } from './service/produit.resolver.service';
import { CreerProduitComponent } from './produit/creer/creer-produit.component';


const routes: Routes = [
  {  path: '',  redirectTo: '/home',  pathMatch: 'full' },
  {  path: 'login',  component: LoginComponent},
  {  path: 'home',   component: HomeComponent,
     children: [
      {  
        path: '', component: ListeProduitsComponent,
        outlet: 'homeOutlet',
        resolve: {
          products: ProduitResolver
       }
   },
     ]
  },
  {  path: 'ajouter-produit',  component: CreerProduitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
