import { Directive, OnInit, Input, ElementRef, HostListener, Output, EventEmitter, Renderer2 } from '@angular/core';

@Directive({
  selector: '[uglLightbox]'
})
export class LightboxDirective {

  @HostListener('click', ['$event']) onClick($event: any) {
    let lightbox = document.createElement('div');
    lightbox.setAttribute('class', 'lightbox');

    if(this.closeOut) {
      lightbox.addEventListener('click', (event) => this.close());
    }

    let content = document.createElement('div');
    content.setAttribute('class', 'content');

    let close = document.createElement('button');
    close.setAttribute('class', 'close');
    close.addEventListener('click', (event) => this.close());

    let icon = document.createElement('i');
    icon.setAttribute('class', 'material-icons');
    icon.textContent = 'close';

    close.append(icon);
    content.appendChild(close);

    if(this.fileUrl_ !== undefined) {
      content.appendChild(this.fileUrl_);
    }

    if(this.action.observers.length > 0) {
      let button = document.createElement('button');
      button.setAttribute('class', 'action');
      button.addEventListener('click', (event) => {
        this.action.emit(event);
        this.close();
      });
      
      if(this.actionIcon_) {
        button.append(this.actionIcon_);
      } else {
        console.error('Lightbox Directive – You must add an icon.');
      }

      content.appendChild(button);
    }

    lightbox.appendChild(content);

    let body = document.getElementsByTagName('app-root')[0];

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

    event.stopPropagation();
    return false;
  }

  @Input() set fileUrl(fileUrl: string) {
    if(this.isImage(fileUrl)) {
      this.fileUrl_ = document.createElement('img');
    } else if(this.isPdf(fileUrl)) {
      this.fileUrl_ = document.createElement('embed');
      this.fileUrl_.setAttribute('width', '100%');
      this.fileUrl_.setAttribute('height', '100%');
    }

    this.fileUrl_.setAttribute('src', fileUrl);
  }

  @Input() set actionIcon(icon: string) {
    this.actionIcon_ = document.createElement('i');
    this.actionIcon_.setAttribute('class', 'material-icons');
    this.actionIcon_.textContent = icon;
  }

  @Output() action: EventEmitter<any> = new EventEmitter();
  
  @Input() closeOut = false;

  fileUrl_: HTMLElement;
  actionIcon_: HTMLElement;

  isImage(fileUrl: string) {
    if(fileUrl.indexOf('.png') > -1 ||
       fileUrl.indexOf('.jpg') > -1 ||
       fileUrl.indexOf('.jpeg') > -1 ||
       fileUrl.indexOf('.bmp') >-1) {
         return true;
       }
  }

  isPdf(fileUrl: string) {
    return fileUrl.indexOf('.pdf') > -1;
  }

  constructor() { }
}
