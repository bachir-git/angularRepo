import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireBase: AngularFirestore) { }

  getAll(collection) {
    return this.fireBase.collection(collection).snapshotChanges()
  }

  add(collection, data) {
    return new Promise<any>((resolve, reject) => {
      this.fireBase.collection(collection).add(data)
        .then(res => { }, err => reject(err));
    });
  }

  update(collection, data) {
    this.fireBase.doc(collection + '/' + data.id).update(data);
  }

  delete(collection, id) {
    this.fireBase.doc(collection + '/' + id).delete();
  }

}
