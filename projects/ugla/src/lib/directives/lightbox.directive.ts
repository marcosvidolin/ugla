import { Directive, OnInit, Input, ElementRef, HostListener, Output, EventEmitter, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uglLightbox]'
})
export class LightboxDirective {

  @Output() action: EventEmitter<any> = new EventEmitter();

  @Input() closeOut = false;

  fileUrlElement: HTMLElement;
  actionIconElement: HTMLElement;


  @HostListener('click', ['$event']) onClick($event: any) {
    const lightbox = document.createElement('div');
    lightbox.setAttribute('class', 'lightbox');

    if (this.closeOut) {
      lightbox.addEventListener('click', (event) => this.close());
    }

    const content = document.createElement('div');
    content.setAttribute('class', 'content');

    const close = document.createElement('button');
    close.setAttribute('class', 'close');
    close.addEventListener('click', (event) => this.close());

    const icon = document.createElement('i');
    icon.setAttribute('class', 'material-icons');
    icon.textContent = 'close';

    close.append(icon);
    content.appendChild(close);

    if (this.fileUrlElement !== undefined) {
      content.appendChild(this.fileUrlElement);
    }

    if (this.action.observers.length > 0) {
      const button = document.createElement('button');
      button.setAttribute('class', 'action');
      button.addEventListener('click', (event) => {
        this.action.emit(event);
        this.close();
      });

      if (this.actionIconElement) {
        button.append(this.actionIconElement);
      } else {
        console.error('Lightbox Directive – You must add an icon.');
      }

      content.appendChild(button);
    }

    lightbox.appendChild(content);

    const body = document.getElementsByTagName('app-root')[0];

    body.insertBefore(lightbox, body.firstChild);

    return false;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler($event: KeyboardEvent) {
    this.close();
  }

  private close() {
    document.querySelectorAll('.lightbox').forEach((event) => {
      event.remove();
    });
    return false;
  }

  @Input() set fileUrl(fileUrl: string) {
    if (this.isImage(fileUrl)) {
      this.fileUrlElement = document.createElement('img');
    } else if (this.isPdf(fileUrl)) {
      this.fileUrlElement = document.createElement('embed');
      this.fileUrlElement.setAttribute('width', '100%');
      this.fileUrlElement.setAttribute('height', '100%');
    }

    this.fileUrlElement.setAttribute('src', fileUrl);
  }

  @Input() set actionIcon(icon: string) {
    this.actionIconElement = document.createElement('i');
    this.actionIconElement.setAttribute('class', 'material-icons');
    this.actionIconElement.textContent = icon;
  }


  isImage(fileUrl: string) {
    if (fileUrl.indexOf('.png') > -1 ||
       fileUrl.indexOf('.jpg') > -1 ||
       fileUrl.indexOf('.jpeg') > -1 ||
       fileUrl.indexOf('.bmp') > -1) {
         return true;
       }
  }

  isPdf(fileUrl: string) {
    return fileUrl.indexOf('.pdf') > -1;
  }

  constructor() { }
}
