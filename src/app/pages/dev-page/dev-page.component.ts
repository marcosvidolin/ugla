import { Component, OnInit } from '@angular/core';
import { ModalService, Options } from 'projects/ugla/src';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {
  constructor(private modal: ModalService) { }

  hiddenContent = true;

  radioItems: Options[];

  images = [
    'https://blog.contabilista.com.br/uploads/editor/b826316f960aafb99d29c061e9889560.jpg',
    'https://blog.pdvend.com.br/wp-content/uploads/2018/11/cupom-fiscal.png'
  ];

  ngOnInit() {
    this.radioItems = [
      new Options('Check1', '1', false, '#d71f3c', 'radios'),
      new Options('Check2', '2', true, '#656565', 'radios'),
      new Options('Check3', '3', false, '#656565', 'radios'),
      new Options('Check4', '4', false, '#656565', 'radios')
    ];
  }

  getItemChecked(event) {
    console.log(event);
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
