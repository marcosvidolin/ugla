import { Component, OnInit } from '@angular/core';
import { ToastService } from 'projects/ugla/src';
import { Auth } from 'projects/ugla/src/lib/models/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private toast: ToastService ) { }

  signIn(auth: Auth) {
    this.toast.success('Login', `Usuário ${auth.user} autenticado com sucesso`, 5000);
  }

  signIn2() {
    this.toast.success('Login', `Usuário autenticado com sucesso`, 5000);
  }
}
