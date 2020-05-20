import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProduitComponent } from './dialog-add-produit.component';

describe('DialogAddProduitComponent', () => {
  let component: DialogAddProduitComponent;
  let fixture: ComponentFixture<DialogAddProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
