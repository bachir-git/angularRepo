import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-creer-produit',
  templateUrl: './creer-produit.component.html',
  styleUrls: ['./creer-produit.component.css']
})
export class CreerProduitComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private crudService: CrudService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      ref: [],
      quantite: [],
      prixunitaire: []
    });

  }

  ajouter() {
    let data = this.addForm.value;
    this.crudService.add('PRODUITS',data)
      .then(res => {
        this.router.navigate(['produits']);
      });
  }

}
