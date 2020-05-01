import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/produit';
import { ProduitMockService } from 'src/app/service/produit.mock.service';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits :Produit[]
  constructor(private produitMockService : ProduitMockService) { }

  ngOnInit(): void {
    this.produits = this.produitMockService.getProduits();

  }

}