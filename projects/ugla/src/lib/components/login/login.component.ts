import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Auth } from '../../models/auth';
import { FieldComponent } from '../field/field.component';

/**
 * Login Component
 */
@Component({
  selector: 'ugl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() header: string = 'Header';
  @Input() subheader: string = 'Subheader';
  @Input() desktopImage: string = '';
  @Input() mobileImage: string = '';
  @Input() buttonBackgroud = 'red';
  @Input() fieldUser: string = 'User';
  @Input() fieldPass: string = 'Password';

  /**
   * Type of auth
   *
   * Default: google
   * Values: google, form
   */
  @Input() hasForm = false;

  /**
   * Image to Google icon
   */
  @Input() googleLogo: string;

  /**
   * Image to float logo
   */
  @Input() floatLogo: string;
  @Input() buttonText: string = 'Button';
  @Output() signIn = new EventEmitter<any>();

  @ViewChild('authButton') loginButton !: ButtonComponent;
  @ViewChild('authUser') authUser !: FieldComponent;
  @ViewChild('authPassword') authPassword !: FieldComponent;

  constructor() {}

  /**
   * Set initial configurations
   */
  ngOnInit() {}

  authenticate() {
    if(!this.hasForm) {
      this.signIn.emit();
    } else {
      let auth = new Auth(this.authUser.value, this.authPassword.value);
      this.signIn.emit(auth);
    }
  }
}
