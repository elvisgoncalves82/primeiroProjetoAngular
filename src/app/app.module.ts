import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosModule } from './cursos/cursos.module';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { Meuprimeiro2Component } from './meuprimeiro2/meuprimeiro2.component';
import { DataBidingComponent } from './data-biding/data-biding.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    Meuprimeiro2Component,
    DataBidingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
