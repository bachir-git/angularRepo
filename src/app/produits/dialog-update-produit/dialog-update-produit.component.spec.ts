import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateProduitComponent } from './dialog-update-produit.component';

describe('DialogUpdateProduitComponent', () => {
  let component: DialogUpdateProduitComponent;
  let fixture: ComponentFixture<DialogUpdateProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUpdateProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
