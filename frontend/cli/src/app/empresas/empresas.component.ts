import { Component, OnInit } from '@angular/core';
import { EMPRESAS } from './mock-empresas';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  //styleUrls: ['./empresas.component.css']
  styles: [
  ]
})
export class EmpresasComponent implements OnInit {
  empresas: Empresa[] = <Empresa[]>[];
  //empresas = EMPRESAS; 
  constructor(
    private empresaService: EmpresaService,
  ) { }
  ngOnInit() {
    this.getEmpresas();
  }
  getEmpresas(): void {
    /*
    this.empresaService.all()
      .subscribe(dataPackage => this.empresas =
        <Empresa[]>dataPackage.data);
    */
    this.empresaService.all()
      .subscribe(lista => this.empresas = lista);
  }
}
