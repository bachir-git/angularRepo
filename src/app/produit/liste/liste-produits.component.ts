import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/service/produit.service';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits: Produit[];
  selectedProduit;
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {

    this.produitService.listProduits()
      .subscribe(response => {
        this.produits = response.map(document => {
          return {
            id: document.payload.doc.id,
            ...document.payload.doc.data() as {} 
          } as Produit;
        })
      });
  }

  public selectProduit(produit) {
    this.selectedProduit = produit;
  }


}