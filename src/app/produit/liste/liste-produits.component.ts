import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits: Produit[];
  selectedProduit;
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

    this.crudService.getAll("PRODUITS")
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