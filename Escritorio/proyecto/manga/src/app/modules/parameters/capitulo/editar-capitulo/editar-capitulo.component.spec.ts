import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCapituloComponent } from './editar-capitulo.component';

describe('EditarCapituloComponent', () => {
  let component: EditarCapituloComponent;
  let fixture: ComponentFixture<EditarCapituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCapituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
