import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { LightboxService } from '../components';

@Directive({
  selector: '[uglLightbox]'
})
export class LightboxDirective {
  constructor(private lightboxService: LightboxService) { }

  @Output() actionIcon = new EventEmitter<string>();

  @Input() closeOut = false;
  @Input() imageIcon: string;
  @Input() filesUrl: string[];

  @HostListener('click', ['$event']) onClick($event: any) {
    if (this.actionIcon.observers.length > 0) {
      this.lightboxService.open(
        this.filesUrl,
        this.closeOut,
        (position) => this.actionIcon.emit(position),
        this.imageIcon
      );
    } else {
      this.lightboxService.open(this.filesUrl, this.closeOut);
    }
  }
}
