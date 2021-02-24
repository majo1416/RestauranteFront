import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoServeComponent } from './compo-serve.component';

describe('CompoServeComponent', () => {
  let component: CompoServeComponent;
  let fixture: ComponentFixture<CompoServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
