import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMangaComponent } from './eliminar-manga.component';

describe('EliminarMangaComponent', () => {
  let component: EliminarMangaComponent;
  let fixture: ComponentFixture<EliminarMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
