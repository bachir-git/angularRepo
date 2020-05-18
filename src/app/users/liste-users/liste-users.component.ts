import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { MatTable } from '@angular/material/table';
import { CrudService } from 'src/app/service/crud.service';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'userName', 'firstName', 'lastName', 'actions'];
  dataSource: User[];

  constructor(private crudService: CrudService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.crudService.getAll("USERS")
      .subscribe(response => {
        this.dataSource = response.map(document => {
          return {
            id: document.payload.doc.id,
            ...document.payload.doc.data() as {}
          } as User;
        })
      });
  }

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  
  addNew() {
    const dialogRef = this.dialog.open(DialogAddComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.table.renderRows();
      }
    });
  }

  startEdit(i: number, id: String, userName: string, password: string, firstName: string, lastName: string) {
    
    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: { id:id, userName:userName, password:password, firstName:firstName, lastName:lastName }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.table.renderRows();
      }
    });
  }

  deleteItem(i: number, id: number, title: string, state: string, url: string) {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: { id: id, title: title, state: state, url: url }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.table.renderRows();
      }
    });
  }


}
