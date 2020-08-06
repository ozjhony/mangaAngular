import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { SubirMangaComponent } from './mangas/subir-manga/subir-manga.component';
import { EliminarMangaComponent } from './mangas/eliminar-manga/eliminar-manga.component';
import { EditarMangaComponent } from './mangas/editar-manga/editar-manga.component';
import { ListaCapitulosComponent } from './mangas/lista-capitulos/lista-capitulos.component';
import { ListaMangasComponent } from './biblioteca/lista-mangas/lista-mangas.component';
import { EditarCapituloComponent } from './capitulo/editar-capitulo/editar-capitulo.component';
import { EliminarCapituloComponent } from './capitulo/eliminar-capitulo/eliminar-capitulo.component';
import { AgregarCapituloComponent } from './capitulo/agregar-capitulo/agregar-capitulo.component';


@NgModule({
  declarations: [SubirMangaComponent, EliminarMangaComponent, EditarMangaComponent, ListaCapitulosComponent, ListaMangasComponent, EditarCapituloComponent, EliminarCapituloComponent, AgregarCapituloComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
