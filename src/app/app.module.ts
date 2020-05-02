import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './produit/liste-produits/liste-produits.component';
import { ProduitMockService } from './service/produit.mock.service';
import { LoginComponent } from './auth/login/login.component';
import { AuthentificationService } from './service/authentification.service';
import { LogoutComponent } from './auth/logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGaurdService } from './service/auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProduitMockService,AuthentificationService,AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
