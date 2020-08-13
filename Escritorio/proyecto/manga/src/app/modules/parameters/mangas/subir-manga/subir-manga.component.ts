import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MangaService} from '../../../../services/manga.service'
import { Router } from '@angular/router';
import { MangaModel} from '../../../../modelos/parameters/manga.model'


declare const showMessage: any;

@Component({
  selector: 'app-subir-manga',
  templateUrl: './subir-manga.component.html',
  styleUrls: ['./subir-manga.component.css']
})
export class SubirMangaComponent implements OnInit {
  fgValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private service: MangaService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      categoria: ['', [Validators.required]],
      nombre: ['', [Validators.required]]

    });
  }

  saveNewRecordFn() {
    if (this.fgValidator.invalid) {
      showMessage("Invalid form.");
    } else {
      let model = this.getUsuarioData();
      this.service.saveNewRecord(model).subscribe(
        data => {
          showMessage("Record saved successfuly");
          this.router.navigate(['/parameters/brand-list']);
        },
        error => {
          showMessage("Error saving.");
        }
      );
    }
  }


  getUsuarioData(): MangaModel {
    let model = new MangaModel();
    model.nombre = this.fgv.nombre.value;
    model.categoria = this.fgv.categoria.value;
    model.capitulos=this.fgv.capitulos.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
