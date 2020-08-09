import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { DefaultComponent } from './public/home/default/default.component'

const routes: Routes = [
{
  path : '/home',
  component:DefaultComponent
},

{
  path:'',
  pathMatch:'full',
  component:DefaultComponent
},
{
  path:'security',
  loadChildren:()=> import ('./modules/security/security.module').then(m=>m.SecurityModule)
},
{
  path:'usuarios',
  loadChildren:()=>import('./modules/usuarios/usuarios.module').then(m=>m.UsuariosModule)
},
{
  path:'parameters',
  loadChildren:()=> import('./modules/parameters/parameters.module').then(m=>m.ParametersModule)
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
