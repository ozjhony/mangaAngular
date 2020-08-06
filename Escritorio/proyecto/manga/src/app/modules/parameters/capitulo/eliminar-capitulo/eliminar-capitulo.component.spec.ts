import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCapituloComponent } from './eliminar-capitulo.component';

describe('EliminarCapituloComponent', () => {
  let component: EliminarCapituloComponent;
  let fixture: ComponentFixture<EliminarCapituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarCapituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCapituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
