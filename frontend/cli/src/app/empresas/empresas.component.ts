import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  //styleUrls: ['./empresas.component.css']
  styles: [
  ]
})
export class EmpresasComponent implements OnInit {
  empresas: Empresa[] = <Empresa[]>[];
  constructor(
    private empresaService: EmpresaService, private modalService: NgbModal
  ) 
  {}
  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.empresaService.all().subscribe(
      empresas => this.empresas = empresas
    );
  }

  deleteEmpresa(id: number): void {
    this.empresaService.delete(id).subscribe(() => {
      this.getEmpresas();
      const modalRef = this.modalService.open(GenericModalComponent);
      modalRef.componentInstance.title = 'Exito';
      modalRef.componentInstance.message = 'Empresa ' + id + ' deleted successfully';
      modalRef.componentInstance.buttonLabel = 'Close';
    }, (error) => this.showErrorModal(error));
  }

  showErrorModal(error: any): void {
    const modalRef = this.modalService.open(GenericModalComponent);
    modalRef.componentInstance.title = 'Error';
    modalRef.componentInstance.message = error.message;
    modalRef.componentInstance.buttonLabel = 'Cerrar';
    modalRef.componentInstance.danger = true;
  }


  openModal(id: number): void {
    const modalRef = this.modalService.open(GenericModalComponent);
    modalRef.componentInstance.title = 'Confirmar borrado';
    modalRef.componentInstance.message = 'Esta seguro que desea borrar esta empresa?';
    modalRef.componentInstance.buttonLabel = 'Borrar';
    modalRef.componentInstance.cancelLabel = 'Cancelar';
    modalRef.result.then((result) => {
      if (result === 'confirmar') {
        this.deleteEmpresa(id);
      }
    });
  }
}
