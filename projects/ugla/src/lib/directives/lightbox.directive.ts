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

    if(this.file_ !== undefined) {
      content.appendChild(this.file_);
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

  @Input() set file(file: string) {
    if(this.isImage(file)) {
      this.file_ = document.createElement('img');
    } else if(this.isPdf(file)) {
      this.file_ = document.createElement('embed');
      this.file_.setAttribute('width', '100%');
      this.file_.setAttribute('height', '100%');
    }

    this.file_.setAttribute('src', file);
  }

  @Input() set actionIcon(icon: string) {
    this.actionIcon_ = document.createElement('i');
    this.actionIcon_.setAttribute('class', 'material-icons');
    this.actionIcon_.textContent = icon;
  }

  @Output() action: EventEmitter<any> = new EventEmitter();
  
  @Input() closeOut = false;

  file_: HTMLElement;
  actionIcon_: HTMLElement;

  isImage(file: string) {
    if(file.indexOf('.png') > -1 ||
       file.indexOf('.jpg') > -1 ||
       file.indexOf('.jpeg') > -1 ||
       file.indexOf('.bmp') >-1) {
         return true;
       }
  }

  isPdf(file: string) {
    return file.indexOf('.pdf') > -1;
  }

  constructor() { }
}
