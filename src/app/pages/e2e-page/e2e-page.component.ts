import { Component, OnInit } from '@angular/core';
import { UglaService, Header, People, Menu, MenuItem } from 'projects/ugla/src';

@Component({
  selector: 'app-e2e-page',
  templateUrl: './e2e-page.component.html',
  styleUrls: ['./e2e-page.component.scss']
})
export class E2ePageComponent implements OnInit {
  colors = ['aquamarine', 'red', 'green', 'purple', 'yellow', 'gray'];
  totalColors = this.colors.length;

  constructor(private ugla: UglaService) {}

  isAutenticated = true;

  header = new Header('Ugla', './assets/imgs/logo.png', 'home', true);

  people = new People('Jack Connor', 'jack.connor@ugla.dev', './assets/imgs/people.png');

  menu = new Menu([
    new MenuItem('Home', '/', true),
    new MenuItem('Login', '/login', true),
    new MenuItem('E2E', '/e2e', true),
    new MenuItem('Menu', '/menu', true),
    new MenuItem('Menu with Toolbar', '/menu-with-toolbar', true),
    new MenuItem('Aside', '/aside', true),
    new MenuItem('Aside with Breadcrumb', '/aside-with-breadcrumb', true),
  ]);

  ngOnInit() {
    this.header.people = this.people;
    this.header.menu = this.menu;
    this.ugla.headerShadow = true;
    this.ugla.hasToolBar();
  }

  hideMenu() {
    this.isAutenticated = false;
  }

  logout() {
    this.isAutenticated = false;
  }

  selectLanguage(language) {
    console.log(`Language selected is ${language.description} and the code is ${language.value}`);
  }

  closeBanner() {}
}
