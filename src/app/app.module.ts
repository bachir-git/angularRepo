import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './produit/liste/liste-produits.component';
import { CreerProduitComponent } from './produit/creer/creer-produit.component';
import { ProduitMockService } from './service/produit.mock.service';
import { LoginComponent } from './auth/login/login.component';
import { AuthentificationService } from './service/authentification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { SidebarComponent } from './structure/sidebar/sidebar.component';
import { ContentComponent } from './structure/content/content.component';
import { HomeComponent } from './home/home.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ProduitService } from './service/produit.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    CreerProduitComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [ProduitMockService,AuthentificationService,AuthGaurdService,ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
