import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresasDetailComponent } from './empresas/empresas-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresasComponent,
    EmpresasDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
