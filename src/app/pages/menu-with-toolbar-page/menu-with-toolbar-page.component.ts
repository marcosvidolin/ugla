import { Component, OnInit } from '@angular/core';
import { UglaService, Header, People, Menu, MenuItem } from 'projects/ugla/src';

@Component({
  selector: 'app-menu-with-toolbar-page',
  templateUrl: './menu-with-toolbar-page.component.html',
  styleUrls: ['./menu-with-toolbar-page.component.scss']
})
export class MenuWithToolbarPageComponent implements OnInit {

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
    new MenuItem('Rules', '/rules', true),
    new MenuItem('Aside', '/aside', true),
    new MenuItem('Aside with Breadcrumb', '/aside-with-breadcrumb', true),
  ]);

  ngOnInit() {
    this.header.people = this.people;
    this.header.menu = this.menu;
    this.ugla.headerShadow = false;
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

  formAction() {
    return false;
  }

}
