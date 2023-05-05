import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresasDetailComponent } from './empresas/empresas-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'empresas/:id', component: EmpresasDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

