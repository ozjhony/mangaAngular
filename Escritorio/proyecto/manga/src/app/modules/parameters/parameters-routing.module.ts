import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubirMangaComponent}from './mangas/subir-manga/subir-manga.component';
import { EditarMangaComponent} from './mangas/editar-manga/editar-manga.component';
import {EliminarMangaComponent} from './mangas/eliminar-manga/eliminar-manga.component';
import {ListaCapitulosComponent} from './mangas/lista-capitulos/lista-capitulos.component'

const routes: Routes = [
  {
    path:'subir-manga',
    component:SubirMangaComponent
  },
  {
    path:'editar-manga',
    component:EditarMangaComponent
  },
  {
    path:'eliminar-manga',
    component:EliminarMangaComponent
  },
  {
    path:'lista-capitulos',
    component:ListaCapitulosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
