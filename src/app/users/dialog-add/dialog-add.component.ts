import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { Validators, FormControl } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
    , private crudService: CrudService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Champ obligatoire' : '';
  }

  submit() {
  }

  onNoClick(): void {
    this.dialogRef.close({event:'Cancel'});
  }

  public confirmAdd(): void {
    console.log(this.data)
    this.crudService.add("USERS",this.data);
  }

  ngOnInit(): void {
  }

  

}
