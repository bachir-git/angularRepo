import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitMockService } from 'src/app/service/produit.mock.service';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits :Produit[]
  selectedProduit ;
  constructor(private produitMockService : ProduitMockService) { }

  ngOnInit(): void {
    this.produits = this.produitMockService.getProduits();

  }
  public selectProduit(produit){
    this.selectedProduit = produit;
  }

}