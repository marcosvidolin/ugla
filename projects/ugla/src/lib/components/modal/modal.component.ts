import {Component, ElementRef, EventEmitter, Input, OnInit, Output, HostListener} from '@angular/core';
import {ModalService} from './modal.service';
import { cycleTabs } from './../common/tab.service';

@Component({
  selector: 'ugl-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  /**
   * Set modal type
   * Options: info|warning|error|success
   * Default: warning
   */
  type: string;

  /**
   * Show modal icon
   * Default: true
   */
  hasIcon?: boolean;

  /**
   * Set modal's title text
   */
  title: string;

  /**
   * Set modal's subtitle text
   */
  subtitle: string;

  /**
   * Set text to cancel button
   */
  @Input() cancelButtonText: string;

  /**
   * Set text to confirm button
   */
  @Input() confirmButtonText: string;

  /**
   * Hide confirm button
   */
  @Input() hiddenConfirmButton?: boolean;

  /**
   * Hide cancel button
   */
  @Input() hiddenCancelButton?: boolean;

  /**
   * Event to cancel button
   */
  @Output() cancelClick = new EventEmitter<any>();

  /**
   * Event to confirm modal
   */
  @Output() confirmClick = new EventEmitter<any>();

  @Output() onShow: EventEmitter<any> = new EventEmitter();

  icon: string;
  isOpened: boolean;
  isClosing = false;
  disableConfirmButton: boolean;
  private element: any;

  constructor(private modalService: ModalService,
              private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    this.modalService.getModalEmitter().subscribe(modal => {
      if (modal) {
        this.title = modal.title;
        this.subtitle = modal.text;
        this.type = modal.type;
        this.isOpened = modal.open;
        this.hasIcon = modal.hasIcon;
        this.type = modal.type;

        setTimeout(function() {
          if (modal.open) {
            document.body.querySelector<HTMLBodyElement>(`.modal-body`).focus();
          }
        }, 0);
      }
    });

    switch (this.type) {
      case 'success':
        this.icon = 'check_circle_outline';
        break;
      case 'error':
        this.icon = 'highlight_off';
        break;
      case 'warning':
        this.icon = 'error_outline';
        break;
      default:
        this.icon = 'info_outline';
    }
  }

  /**
   * Call cancel event.
   */
  onCancelClick() {
    this.cancelClick.emit(false);
  }

  /**
   * Call confirm event
   */
  onConfirmClick() {
    if (this.disableConfirmButton) {
      return false;
    }
    this.confirmClick.emit();
  }

  /**
   * Handle keyboard events to close modal and tab through the content within the modal.
   */
  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape': {
        event.stopImmediatePropagation();  // prevents events being fired for multiple modals if more than 2 open
        break;
      }

      case 'Tab': {
        cycleTabs(event, this.element);
        break;
      }
    }
  }
}
