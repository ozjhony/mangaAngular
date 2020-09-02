import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubirMangaComponent}from './mangas/subir-manga/subir-manga.component';
import { EditarMangaComponent} from './mangas/editar-manga/editar-manga.component';
import {ListaMangaComponent} from '../parameters/mangas/lista-manga/lista-manga.component'
import { AgregarCapituloComponent } from './capitulo/agregar-capitulo/agregar-capitulo.component';
import { EditarCapituloComponent } from './capitulo/editar-capitulo/editar-capitulo.component';
//import {ListaCapitulosComponent} from './capitulo/lista-capitulos/lista-capitulos.component';

const routes: Routes = [
  {
   path:'lista-mangas',
   component:ListaMangaComponent
  },
  {
    path:'subir-manga',
    component:SubirMangaComponent
  },
  {
    path:'editar-manga',
    component:EditarMangaComponent
  },
  {
    path: 'lista-capitulos',
    component:AgregarCapituloComponent
  },
  {
    path: 'agregar-capitulo',
    component:AgregarCapituloComponent
  },
  {
    path: 'editar-capitulo',
    component:EditarCapituloComponent
  }
  
 // {
 //   path:'lista-capitulos',
   // component:ListaCapitulosComponent
  //}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
