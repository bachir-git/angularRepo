import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProduitMockService } from 'src/app/service/produit.mock.service';

import { Router } from "@angular/router";
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-creer-produit',
  templateUrl: './creer-produit.component.html',
  styleUrls: ['./creer-produit.component.css']
})
export class CreerProduitComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private produitService: ProduitService) { }

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
    this.produitService.creerProduit(data)
      .then(res => {
        this.router.navigate(['produits']);
      });



  }

}
