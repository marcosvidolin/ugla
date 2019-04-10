import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'projects/ugla/src';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router,
              private toast: ToastService ) { }

  ngOnInit() {
  }

  signIn() {
    this.toast.success('Login', 'Autenticado com sucesso', 5000);
    this.router.navigate(['/home']);
  }
}
