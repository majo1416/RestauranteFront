import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgistradoComponent } from './resgistrado.component';

describe('ResgistradoComponent', () => {
  let component: ResgistradoComponent;
  let fixture: ComponentFixture<ResgistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgistradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
