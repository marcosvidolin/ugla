import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'projects/ugla/src/lib/components/modal/modal.service';
import { ModalComponent } from 'projects/ugla/src';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  @ViewChild('modal') modalComponent: ModalComponent;

  ngOnInit() {
  }

  openModal() {
    this.modalService.warning('Teste', 'teste');
  }

  onCancelModalClick() {
    this.modalService.closeModal();
  }

  onConfirmModalClick() {

  }

}
