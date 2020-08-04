import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { DefaultComponent } from './public/home/default/default.component'

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  component:DefaultComponent
  
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
