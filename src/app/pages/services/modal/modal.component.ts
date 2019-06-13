import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'projects/ugla/src';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  @ViewChild('modal') modalComponent: ModalComponent;

  ngOnInit() {
  }

  openModal() {
    this.modalService.warning('Modal Title', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, minima?');
  }

  onCancelModalClick() {
    this.modalService.closeModal();
  }

  onConfirmModalClick() {
    this.modalService.closeModal();
  }
}
