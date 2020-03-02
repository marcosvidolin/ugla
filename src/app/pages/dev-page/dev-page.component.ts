import { DatepickerComponent } from './../../../../projects/ugla/src/lib/components/datepicker/datepicker.component';
import { ToastService } from './../../../../projects/ugla/src/lib/components/toast/toast.service';
import { LightboxService } from './../../../../projects/ugla/src/lib/components/lightbox/lightbox.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'projects/ugla/src';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {
  constructor(
    private modal: ModalService,
    private lightbox: LightboxService,
    private toastService: ToastService
  ) { }

  hiddenContent = true;
  rotateIcon = false;

  testTooltip = 'Inicial';

  images = [
    'https://edumoreira.com.br/wp-content/uploads/2019/08/Qual-a-diferen%C3%A7a-entre-DOC-e-TED-870x450.jpg',
    'https://edumoreira.com.br/wp-content/uploads/2019/08/Qual-a-diferen%C3%A7a-entre-DOC-e-TED-870x450.jpg',
    'https://edumoreira.com.br/wp-content/uploads/2019/08/Qual-a-diferen%C3%A7a-entre-DOC-e-TED-870x450.jpg'
  ];

  images2 = [
    'http://corrupteddevelopment.com/wp-content/uploads/2012/03/sky-blue-background.jpg',
    'https://edumoreira.com.br/wp-content/uploads/2019/08/Qual-a-diferen%C3%A7a-entre-DOC-e-TED-870x450.jpg',
    'https://edumoreira.com.br/wp-content/uploads/2019/08/Qual-a-diferen%C3%A7a-entre-DOC-e-TED-870x450.jpg'
  ];

  @ViewChild('dueDate') dueDateDatePicker: DatepickerComponent;

  datepickerOptions: any = {
    startDate: new Date(),
    minDate: new Date(),
    position: 'br'
  };

  onChangeDueDate(event) {
    console.log(event);
  }

  testDate() {
    // console.log(this.dueDateDatePicker.picker);
    this.testTooltip = 'Segundo';
  }

  ngOnInit() {
    this.toastService.warning('Warning', 'Invalid Report Number', 0);
  }

  rotateNow() {
    this.rotateIcon = !this.rotateIcon;
  }

  openLightbox() {
    this.lightbox.open(this.images, false, this.iconCallback, 'delete_outline');
  }

  iconCallback(position: string): void {
    console.log('POSITION', position);
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
