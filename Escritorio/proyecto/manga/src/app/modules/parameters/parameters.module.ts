import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { SubirMangaComponent } from './mangas/subir-manga/subir-manga.component';
import { EliminarMangaComponent } from './mangas/eliminar-manga/eliminar-manga.component';
import { EditarMangaComponent } from './mangas/editar-manga/editar-manga.component';
import { EditarCapituloComponent } from './capitulo/editar-capitulo/editar-capitulo.component';
import { EliminarCapituloComponent } from './capitulo/eliminar-capitulo/eliminar-capitulo.component';
import { AgregarCapituloComponent } from './capitulo/agregar-capitulo/agregar-capitulo.component';
import {ListaMangaComponent} from './mangas/lista-manga/lista-manga.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SubirMangaComponent, EliminarMangaComponent, ListaMangaComponent,EditarMangaComponent, EditarCapituloComponent, EliminarCapituloComponent, AgregarCapituloComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ParametersModule { }
