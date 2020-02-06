import { Component, OnInit } from '@angular/core';
import { ModalService } from 'projects/ugla/src';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {
  constructor(private modal: ModalService) { }

  ngOnInit() {
    console.log('Modal?');
  }

  open() {
    this.modal.warning('Modal de teste', 'Teste teste teste', true);
  }


  openError() {
    this.modal.error('Modal de teste', 'Teste teste teste', true);
  }


  cancel() {
    this.modal.closeModal();
  }

  confirm() {
    this.modal.closeModal();
  }
}
