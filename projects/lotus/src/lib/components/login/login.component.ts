import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

/**
 * Login component
 *
 * # Example
 *
 *```html
 // Instantiate in your HTML
 <lts-login #auth
           [header]="'Título'"
           [subheader]="'Subtítulo'"
           [buttonText]="'Autenticar'"
           [desktopImage]="'../../assets/autentication-desktop.jpg'"
           [mobileImage]="'../../assets/autentication-mobile.jpg'"
           (signIn)="signIn()"></lts-login>
 ```
 *
 ```typescript
    // In your component's TS
    @ViewChild('loginComponent') loginComponent: LoginComponent;
 ```
 *
 */
@Component({
  selector: 'lts-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() header: string;
  @Input() subheader: string;
  @Input() desktopImage: string;
  @Input() mobileImage: string;

  /**
   * Image to Google icon
   */
  @Input() googleLogo: string;

  /**
   * Image to float logo
   */
  @Input() floatLogo: string;
  @Input() buttonText: string;
  @Output() signIn: EventEmitter<any> = new EventEmitter();

  @ViewChild('authButton') loginButton: ButtonComponent;

  constructor() {
  }

  /**
   * Set initial configurations
   */
  ngOnInit() {
    this.header = (this.header === undefined) ? 'Header' : this.header;
    this.subheader = (this.subheader === undefined) ? 'Subheader' : this.subheader;
    this.desktopImage = (this.desktopImage === undefined) ? '' : this.desktopImage;
    this.mobileImage = (this.mobileImage === undefined) ? '' : this.mobileImage;
    this.buttonText = (this.buttonText === undefined) ? 'Button' : this.buttonText;
  }

  authenticate() {
    this.signIn.emit();
  }
}
