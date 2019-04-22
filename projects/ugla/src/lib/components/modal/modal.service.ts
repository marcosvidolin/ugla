import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export class Modal {
  title: string;
  text: string;
  type: string;
  hasIcon: boolean;
  open: boolean;

  constructor(title, text, open?, type?, hasIcon?) {
    this.title = title;
    this.text = text;
    this.type = type || 'info';
    this.hasIcon = (hasIcon === undefined) ? true : hasIcon;
    this.open = (open === undefined) ? true : open;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: Modal;
  private modalEventEmitter = new Subject<Modal>();

  constructor() {
  }

  /**
   * Open a success modal.
   * @param title
   * @param text
   * @param hasIcon. Optional
   */
  public success(title: string, text: string, hasIcon?: boolean) {
    return this.open(title, text, 'success', hasIcon);
  }

  /**
   * Open an error modal.
   * @param title
   * @param text
   * @param hasIcon. Optional
   */
  public error(title: string, text: string, hasIcon?: boolean) {
    return this.open(title, text, 'error', hasIcon);
  }

  /**
   * Open a warning modal.
   * @param title
   * @param text
   * @param hasIcon. Optional
   */
  public warning(title: string, text: string, hasIcon?: boolean) {
    return this.open(title, text, 'warning', hasIcon);
  }

  /**
   * Open an info modal.
   * @param title
   * @param text
   * @param hasIcon. Optional
   */
  public info(title: string, text: string, hasIcon?: boolean) {
    return this.open(title, text, 'info', hasIcon);
  }

  public closeModal() {
    this.modal.open = false;
    this.modalEventEmitter.next(this.modal);
  }


  getModalEmitter() {
    return this.modalEventEmitter;
  }

  /**
   * Open a modal.
   * @param title
   * @param text
   * @param type. Available options: 'success', 'error', 'warning', 'info'
   * @param hasIcon. Optional, default is true
   */
  private open(title: string, text: string, type: string, hasIcon?: boolean) {
    this.modal = new Modal(title, text, true, type, hasIcon);

    this.modal.open = true;
    this.modalEventEmitter.next(this.modal);
    return this.modal;

  }
}
