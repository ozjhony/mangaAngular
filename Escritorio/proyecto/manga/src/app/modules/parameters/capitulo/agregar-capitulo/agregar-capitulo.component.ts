import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CapituloService } from 'src/app/services/capitulo.service';
import { Router } from '@angular/router';
import { CapituloModel } from 'src/app/modelos/parameters/capitulos.model';

declare const showMessage: any;

@Component({
  selector: 'app-agregar-capitulo',
  templateUrl: './agregar-capitulo.component.html',
  styleUrls: ['./agregar-capitulo.component.css']
})
export class AgregarCapituloComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private service: CapituloService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      numero: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      mangaId:['', [Validators.required]],
      rutamanga:['', [Validators.required]],

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
          this.router.navigate(['/parameters/lista-mangas']);
        },
        error => {
          showMessage("Error saving.");
        }
      );
    }
  }


  getUsuarioData(): CapituloModel {
    let model = new CapituloModel();
    model.nombre = this.fgv.nombre.value;
    model.numero = this.fgv.numero.value;
    model.mangaId=this.fgv.mangaId.value;
    model.rutamanga=this.fgv.rutamanga.value;
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
