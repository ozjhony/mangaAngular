import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaImagesComponent } from './manga-images.component';

describe('MangaImagesComponent', () => {
  let component: MangaImagesComponent;
  let fixture: ComponentFixture<MangaImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangaImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
