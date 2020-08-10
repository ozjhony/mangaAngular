import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import {HeroComponent}from './public/master-page/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { DefaultComponent } from './public/home/default/default.component';
import { SideMenuComponent } from './public/master-page/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    DefaultComponent,
    SideMenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
