import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMangaComponent } from './lista-manga.component';

describe('ListaMangaComponent', () => {
  let component: ListaMangaComponent;
  let fixture: ComponentFixture<ListaMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
