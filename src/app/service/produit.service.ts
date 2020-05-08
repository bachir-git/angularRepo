import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ProduitService {

    constructor(private fireBase: AngularFirestore) {
    }


    listProduits(){
        return this.fireBase.collection('PRODUITS').snapshotChanges();
    }

    creerProduit(data) {
        return new Promise<any>((resolve, reject) => {
            this.fireBase.collection("PRODUITS").add(data)
                .then(res => { }, err => reject(err));
        });
    }

    modifierProduit(data){
        delete data.id;
        this.fireBase.doc('PRODUITS/' + data.id).update(data);
    }

    supprimerProduit(data){
        this.fireBase.doc('PRODUITS/' + data).delete();
    }

}