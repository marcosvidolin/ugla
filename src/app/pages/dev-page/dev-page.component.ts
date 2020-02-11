import { Component, OnInit } from '@angular/core';
import { ModalService } from 'projects/ugla/src';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {
  constructor(private modal: ModalService) { }

  hiddenContent = true;

  images = [
    'https://expenses-uat.s3.sa-east-1.amazonaws.com/c0be6871-4d4b-4418-aea7-144e7ff8f2d9-202002111214006?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200211T141407Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=AKIAVJ6TWLSBP5A5OQ7O%2F20200211%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=29e9d8a4cbece05367cb5991b1d0ad0e0ec5b8e612bba55a7e69debc23962e76&type=pdf',
    'https://edumoreira.com.br/wp-content/uploads/2019/08/Qual-a-diferen%C3%A7a-entre-DOC-e-TED-870x450.jpg'
  ];

  ngOnInit() {}

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
    this.hiddenContent = true;
    this.modal.info('Template', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, rem.', true);
  }

  cancel() {
    this.hiddenContent = false;
    this.modal.closeModal();
  }

  confirm() {
    this.hiddenContent = false;
    this.modal.closeModal();
  }
}
