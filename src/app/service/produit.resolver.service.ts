import { Resolve } from '@angular/router';
import { ProduitMockService } from './produit.mock.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ProduitResolver implements Resolve<any>{

    constructor(private produitMock:ProduitMockService){
  
    }
    resolve(){
      return this.produitMock.getProduits();
    }
  }