import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCapituloComponent } from './agregar-capitulo.component';

describe('AgregarCapituloComponent', () => {
  let component: AgregarCapituloComponent;
  let fixture: ComponentFixture<AgregarCapituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCapituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
