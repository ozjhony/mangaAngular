import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { SubirMangaComponent } from './mangas/subir-manga/subir-manga.component';
import { EliminarMangaComponent } from './mangas/eliminar-manga/eliminar-manga.component';
import { EditarMangaComponent } from './mangas/editar-manga/editar-manga.component';
import { ListaCapitulosComponent } from './mangas/lista-capitulos/lista-capitulos.component';
import { ListaMangasComponent } from './biblioteca/lista-mangas/lista-mangas.component';


@NgModule({
  declarations: [SubirMangaComponent, EliminarMangaComponent, EditarMangaComponent, ListaCapitulosComponent, ListaMangasComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
