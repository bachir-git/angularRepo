import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduitsComponent } from './create-produits.component';

describe('CreateProduitsComponent', () => {
  let component: CreateProduitsComponent;
  let fixture: ComponentFixture<CreateProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
