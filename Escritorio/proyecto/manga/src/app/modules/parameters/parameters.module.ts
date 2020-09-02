import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { SubirMangaComponent } from './mangas/subir-manga/subir-manga.component';
import { EditarMangaComponent } from './mangas/editar-manga/editar-manga.component';
import { EditarCapituloComponent } from './capitulo/editar-capitulo/editar-capitulo.component';
import { AgregarCapituloComponent } from './capitulo/agregar-capitulo/agregar-capitulo.component';
import {ListaMangaComponent} from './mangas/lista-manga/lista-manga.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaCapitulosComponent } from './capitulo/lista-capitulos/lista-capitulos.component';



@NgModule({
  declarations: [SubirMangaComponent, ListaMangaComponent,EditarMangaComponent, EditarCapituloComponent, AgregarCapituloComponent, ListaCapitulosComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParametersModule { }
