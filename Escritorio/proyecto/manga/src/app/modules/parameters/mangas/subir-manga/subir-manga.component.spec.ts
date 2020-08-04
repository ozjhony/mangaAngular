import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirMangaComponent } from './subir-manga.component';

describe('SubirMangaComponent', () => {
  let component: SubirMangaComponent;
  let fixture: ComponentFixture<SubirMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
