import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Empresa } from '../empresas/empresa';
import { EmpresaService } from './empresa.service';

@Component({
  selector: 'app-empresas-detail',
  templateUrl: './empresas-detail.component.html',
  styles: [
  ]
})

export class EmpresasDetailComponent {
  empresa!: Empresa;
  constructor(
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private location: Location
  ) {
  }
  ngOnInit() {
    this.get();
  }
  get(): void {
    const id = this.route.snapshot.paramMap.get("id")!;
    if(id === "new"){
      this.empresa = <Empresa>{};
    } else {
      this.empresaService.get(+id).subscribe((empresa) => (this.empresa = empresa));
    }
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.empresaService.save(this.empresa).subscribe(empresa => {this.empresa
    = empresa; this.goBack();});
    }
}