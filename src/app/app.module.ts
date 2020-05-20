import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ListeProduitsComponent } from './produits/liste-produits/liste-produits.component';
import { DialogAddProduitComponent } from './produits/dialog-add-produit/dialog-add-produit.component';
import { DialogDeleteProduitComponent } from './produits/dialog-delete-produit/dialog-delete-produit.component';
import { DialogUpdateProduitComponent } from './produits/dialog-update-produit/dialog-update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogAddComponent,
    ListeUsersComponent,
    ListeProduitsComponent,
    DialogAddProduitComponent,
    DialogDeleteProduitComponent,
    DialogUpdateProduitComponent,

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
