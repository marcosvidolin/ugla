import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService, UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: ModalService,
              private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  public html = `
    <div uglGrid [grid]="true" [col]="4" [gap]="2">
    <ugl-button
        [id]="'modal-button'"
        [style]="'border'"
        [color]="'yellow'"
        [wave]="true"
        [size]="'small'"
        (click)="openModal()"
        [title]="'Modal'">Open Modal Service</ugl-button>
    </div>

    <ugl-modal (cancelClick)="onCancelModalClick()"
            (confirmClick)="onConfirmModalClick()"
            [cancelButtonText]="'Cancel'"
            [confirmButtonText]="'Confirm'">
  `;

  @ViewChild('modal') modalComponent: ModalComponent;

  ngOnInit() {}

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
