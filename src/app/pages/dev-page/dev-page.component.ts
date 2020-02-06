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

  openWarning() {
    this.modal.warning('Warning', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem.', true);
  }


  openError() {
    this.modal.error('Error', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem.', true);
  }

  openSuccess() {
    this.modal.success('Success', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem.', true);
  }

  openInfo() {
    this.modal.info('Info', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem.', true);
  }

  openTemplate() {
    this.modal.info('Template', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem.', true);
  }

  cancel() {
    this.modal.closeModal();
  }

  confirm() {
    this.modal.closeModal();
  }
}
