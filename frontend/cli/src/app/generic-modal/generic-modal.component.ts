import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generic-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ title }}</h4>
      <button type="button" class="close" aria-label="Cerrar" (click)="activeModal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">{{ message }}</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="activeModal.dismiss()">{{ cancelLabel }}</button>
      <button type="button" class="btn" [class.btn-primary]="primary" [class.btn-danger]="danger" (click)="confirm()">{{ buttonLabel }}</button>
    </div>
  `,
})
export class GenericModalComponent {
  @Input()
  title!: string;
  @Input()
  message!: string;
  @Input()
  buttonLabel!: string;
  @Input()
  cancelLabel!: string;
  @Input()
  primary!: boolean;
  @Input()
  danger!: boolean;

  constructor(public activeModal: NgbActiveModal) {}

  confirm() {
    this.activeModal.close('confirmar');
  }
}