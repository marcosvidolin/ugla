import { Directive, OnInit, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[uglLightbox]'
})
export class LightboxDirective {

  @HostListener('click', ['$event']) onClick($event: any) {
    let lightbox = document.createElement('div');
    lightbox.setAttribute('class', 'lightbox');
    // lightbox.addEventListener('click', (event) => this.close(event));

    let content = document.createElement('div');
    content.setAttribute('class', 'content');

    let close = document.createElement('button');
    close.setAttribute('class', 'close');

    close.addEventListener('click', (event) => this.close(event));

    let icon = document.createElement('i');
    icon.setAttribute('class', 'material-icons');
    icon.textContent = 'close';

    close.append(icon);
    content.appendChild(close);

    if(this.image_ !== undefined) {
      content.appendChild(this.image_);
    }

    if(this.action.observers.length > 0) {
      let button = document.createElement('button');
      button.setAttribute('class', 'action');
      button.addEventListener('click', (event) => {
        this.action.emit(event);
        this.close(event);
      });
      
      if(this.actionIcon_) {
        button.append(this.actionIcon_);
      }

      content.appendChild(button);
    }

    lightbox.appendChild(content);

    let body = document.getElementsByTagName('app-root')[0];

    body.insertBefore(lightbox, body.firstChild);

    return false;
  }

  private close(event: any) {
    event.currentTarget.closest('.lightbox').remove()
    event.stopPropagation();
    return false;
  }

  @Input() set image(image: string) {
    this.image_ = document.createElement('img');
    this.image_.setAttribute('src', image);
  }

  @Input() set actionIcon(icon: string) {
    this.actionIcon_ = document.createElement('i');
    this.actionIcon_.setAttribute('class', 'material-icons');
    this.actionIcon_.textContent = icon;
  }


  @Output() action: EventEmitter<any> = new EventEmitter();

  image_: HTMLElement;
  actionIcon_: HTMLElement;
  actionClose: boolean;

  private isImage(file: string) {
    return file.indexOf('.png') > -1 ||
           file.indexOf('.jpg') > -1 ||
           file.indexOf('.jpeg') > -1 ||
           file.indexOf('.bmp') > -1 ||
           file.indexOf('.gif') > -1;
  }

  constructor(private el: ElementRef) { }
}
