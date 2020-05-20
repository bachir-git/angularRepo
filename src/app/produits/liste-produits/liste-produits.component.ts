import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { Produit } from 'src/app/models/produit';
import { MatTable } from '@angular/material/table';
import { DialogAddProduitComponent } from '../dialog-add-produit/dialog-add-produit.component';
import { DialogDeleteProduitComponent } from '../dialog-delete-produit/dialog-delete-produit.component';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ref', 'quantite', 'prixunitaire', 'actions'];
  dataSource: Produit[];

  constructor(private crudService: CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.crudService.getAll("PRODUITS")
      .subscribe(response => {
        this.dataSource = response.map(document => {
          return {
            id: document.payload.doc.id,
            ...document.payload.doc.data() as {}
          } as Produit;
        })
      });
  }

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  
  addNew() {
    const dialogRef = this.dialog.open(DialogAddProduitComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.table.renderRows();
      }
    });
  }

  startEdit(i: number, id: String, ref: string, quantite: number, prixunitaire: number) {
    
    const dialogRef = this.dialog.open(DialogDeleteProduitComponent, {
      data: { id:id, ref:ref, quantite:quantite, prixunitaire:prixunitaire }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.table.renderRows();
      }
    });
  }

  deleteItem(i: number, id: number, ref: string, quantite: number, prixunitaire: number) {
    
    const dialogRef = this.dialog.open(DialogDeleteProduitComponent, {
      data: { id: id, ref: ref, quantite: quantite, prixunitaire: prixunitaire }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.table.renderRows();
      }
    });
  }


}
