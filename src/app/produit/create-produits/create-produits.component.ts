import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ProduitMockService } from 'src/app/service/produit.mock.service';
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-produits',
  templateUrl: './create-produits.component.html',
  styleUrls: ['./create-produits.component.css']
})
export class CreateProduitsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private produitMockService: ProduitMockService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      ref: [],
      quantite: [],
      prixunitaire: []
    });

  }

  ajouter() {
    
    this.produitMockService.setProduits(this.addForm.value);
    
    this.router.navigate(['produits']);

  }

}
