import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './produit/liste/liste-produits.component';
import { CreerProduitComponent } from './produit/creer/creer-produit.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthentificationService } from './service/authentification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { NavbarComponent } from './structure/navbar/navbar.component';
import { SidebarComponent } from './structure/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { MaterialModule } from './material/material.module';
import { DialogDeleteComponent } from './users/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './users/dialog-edit/dialog-edit.component';
import { DialogAddComponent } from './users/dialog-add/dialog-add.component';
import { ListeUsersComponent } from './users/liste-users/liste-users.component';
import { CrudService } from './service/crud.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    CreerProduitComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogAddComponent,
    ListeUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
   
  ],
  
  providers: [AuthentificationService,AuthGaurdService,CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
