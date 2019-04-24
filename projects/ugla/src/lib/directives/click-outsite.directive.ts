import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[vnlClickOutside]'
})
export class ClickOutsideDirective {
    constructor(private _elementRef: ElementRef) {
    }

    @Output()
    public vnlClickOutside = new EventEmitter<MouseEvent>();

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
      if (!targetElement) {
        return;
      }

      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.vnlClickOutside.emit(event);
        event.preventDefault();
      }
    }
}
