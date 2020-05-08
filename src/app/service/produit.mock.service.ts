import { Produit } from '../models/produit';
import { Injectable } from '@angular/core';

@Injectable()
export class ProduitMockService {
    private PRODUITS: Produit[] = [];
    constructor() {
        let p1: Produit = new Produit("1",'Livre', 50, 50.5);
        let p2: Produit = new Produit("2",'Cahier', 20, 20.2);
        let p3: Produit = new Produit("3",'Stylo', 30, 30.3);
        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
    }

    public getProduits(): Produit[] {
        return this.PRODUITS;
    }

    public setProduits(p: Produit) {
        console.log(p.quantite);
        this.PRODUITS.push(p);
    }
}