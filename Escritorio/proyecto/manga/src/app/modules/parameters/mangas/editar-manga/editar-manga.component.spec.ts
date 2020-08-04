import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMangaComponent } from './editar-manga.component';

describe('EditarMangaComponent', () => {
  let component: EditarMangaComponent;
  let fixture: ComponentFixture<EditarMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
