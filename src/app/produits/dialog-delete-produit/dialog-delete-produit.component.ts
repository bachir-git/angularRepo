import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dialog-delete-produit',
  templateUrl: './dialog-delete-produit.component.html',
  styleUrls: ['./dialog-delete-produit.component.css']
})
export class DialogDeleteProduitComponent {

  constructor(public dialogRef: MatDialogRef<DialogDeleteProduitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public crudService: CrudService) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.crudService.delete("PRODUITS", this.data.id);
  }

}
