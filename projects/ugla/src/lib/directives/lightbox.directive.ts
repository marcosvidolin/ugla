import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[uglLightbox]'
})
export class LightboxDirective {

  @Output() actionIcon = new EventEmitter<string>();

  @Input() closeOut = false;

  filesUrlElement: HTMLElement;
  actionIconElement: HTMLElement;
  content: HTMLElement;
  page: HTMLElement;

  @HostListener('click', ['$event']) onClick($event: any) {
    const lightbox = document.createElement('div');
    lightbox.setAttribute('class', 'lightbox');

    if (this.closeOut) {
      lightbox.addEventListener('click', (event) => this.close());
    }

    this.content = document.createElement('div');
    this.content.setAttribute('class', 'content');

    const close = document.createElement('button');
    close.setAttribute('class', 'close');
    close.addEventListener('click', (event) => this.close());

    const icon = document.createElement('i');
    icon.setAttribute('class', 'material-icons');
    icon.textContent = 'close';

    close.append(icon);
    this.content.appendChild(close);

    if (this.filesUrlElement !== undefined) {
      const total = this.filesUrlElement.childElementCount;

      this.content.appendChild(this.filesUrlElement);

      if (total > 1) {
        const navigation = document.createElement('div');
        navigation.setAttribute('class', 'navigation');

        const buttonRight = document.createElement('button');
        buttonRight.setAttribute('class', 'arrow');
        const iconRight = document.createElement('i');
        iconRight.setAttribute('class', 'material-icons');
        iconRight.textContent = 'navigate_next';
        buttonRight.appendChild(iconRight);
        buttonRight.addEventListener('click', (event) => this.next());

        const buttonLeft = document.createElement('button');
        buttonLeft.setAttribute('class', 'arrow');
        const iconLeft = document.createElement('i');
        iconLeft.setAttribute('class', 'material-icons');
        iconLeft.textContent = 'navigate_before';
        buttonLeft.appendChild(iconLeft);
        buttonLeft.addEventListener('click', (event) => this.prev());

        navigation.appendChild(buttonLeft);
        navigation.appendChild(buttonRight);
        this.content.appendChild(navigation);

        this.page = document.createElement('div');
        this.page.setAttribute('class', 'page');
        this.page.textContent = `1 of ${this.filesUrlElement.childElementCount.toString()}`;

        this.content.appendChild(this.page);
      }
    }

    if (this.actionIcon.observers.length > 0) {
      const button = document.createElement('button');
      button.setAttribute('class', 'action');
      button.addEventListener('click', (event) => {
        const position = this.content.querySelector('.selected').getAttribute('data-position');

        this.actionIcon.emit(position);
        this.close();
      });

      if (this.actionIconElement) {
        button.append(this.actionIconElement);
      } else {
        console.error('Lightbox Directive – You must add an icon.');
      }

      this.content.appendChild(button);
    }

    lightbox.appendChild(this.content);

    const body = document.getElementsByTagName('app-root')[0];

    body.insertBefore(lightbox, body.firstChild);

    return false;
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler($event: KeyboardEvent) {
    const hasSlide = this.filesUrlElement.childElementCount > 1;

    if ($event.key === 'Escape') {
      this.close();
    } else if ($event.key === 'ArrowRight' && hasSlide) {
      this.next();
    } else if ($event.key === 'ArrowLeft' && hasSlide) {
      this.prev();
    }
  }

  private close() {
    document.querySelectorAll('.lightbox').forEach((event) => {
      event.remove();
    });
    return false;
  }

  private next() {
    const current = this.content.querySelector('.selected');

    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('selected');
      current.classList.remove('selected');
    } else {
      current.parentElement.firstElementChild.classList.add('selected');
      current.classList.remove('selected');
    }

    const currentPage = this.content.querySelector('.selected').getAttribute('data-position');
    this.page.textContent = `${currentPage} of ${this.filesUrlElement.childElementCount.toString()}`;
  }

  private prev() {
    const current = this.content.querySelector('.selected');

    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('selected');
      current.classList.remove('selected');
    } else {
      current.parentElement.lastElementChild.classList.add('selected');
      current.classList.remove('selected');
    }

    const currentPage = this.content.querySelector('.selected').getAttribute('data-position');
    this.page.textContent = `${currentPage} of ${this.filesUrlElement.childElementCount.toString()}`;
  }

  @Input() set filesUrl(filesUrl: string[]) {
    this.filesUrlElement = document.createElement('div');
    this.filesUrlElement.setAttribute('class', 'slide');

    if (filesUrl) {
      filesUrl.forEach((fileUrl, index) => {
        let element: HTMLElement;
        let type: string;

        if (fileUrl.indexOf('type') > -1) {
          type = fileUrl.substr(fileUrl.indexOf('type')).split('=')[1];
          fileUrl = fileUrl.substring(fileUrl.indexOf('&type'), -1);
        } else {
          const items = fileUrl.split('.');
          type = items[items.length - 1];
        }

        if (this.isImage(type)) {
          element = document.createElement('img');
        } else if (this.isPdf(type)) {
          element = document.createElement('embed');
          element.setAttribute('width', '100%');
          element.setAttribute('height', '100%');
        }

        element.setAttribute('class', 'slide-item');
        element.setAttribute('src', fileUrl);
        element.setAttribute('data-position', (index + 1).toString());

        if (index === 0) {
          element.classList.add('selected');
        }

        this.filesUrlElement.appendChild(element);
      });
    }
  }

  @Input() set imageIcon(icon: string) {
    this.actionIconElement = document.createElement('i');
    this.actionIconElement.setAttribute('class', 'material-icons');
    this.actionIconElement.textContent = icon;
  }

  isImage(fileUrl: string) {
    if (fileUrl.indexOf('png') > -1 ||
       fileUrl.indexOf('jpg') > -1 ||
       fileUrl.indexOf('jpeg') > -1 ||
       fileUrl.indexOf('bmp') > -1) {
      return true;
    }
  }

  isPdf(fileUrl: string) {
    return fileUrl.indexOf('pdf') > -1;
  }

  constructor() { }
}
