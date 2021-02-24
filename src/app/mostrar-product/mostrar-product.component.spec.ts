import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProductComponent } from './mostrar-product.component';

describe('MostrarProductComponent', () => {
  let component: MostrarProductComponent;
  let fixture: ComponentFixture<MostrarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
