import { Component, OnInit } from '@angular/core';
import { UglaService, Header, People, AsideItem, Menu, MenuItem } from 'projects/ugla/src';

@Component({
  selector: 'app-aside-with-breadcrumb-page',
  templateUrl: './aside-with-breadcrumb-page.component.html',
  styleUrls: ['./aside-with-breadcrumb-page.component.scss']
})
export class AsideWithBreadcrumbPageComponent implements OnInit {
  constructor(private ugla: UglaService) {}

  isAutenticated = true;

  header = new Header('Ugla', './assets/imgs/logo.png', 'home', true);

  people = new People('Jack Connor', 'jack.connor@ugla.dev', './assets/imgs/people.png');

  menu = [
    new AsideItem('Home', '/', true),
    new AsideItem('Login', '/login', true),
    new AsideItem('E2E', '/e2e', true),
    new AsideItem('Menu', '/menu', true),
    new AsideItem('Menu with Toolbar', '/menu-with-toolbar', true),
    new AsideItem('Rules', '/rules', true),
    new AsideItem('Aside', '/aside', true),
    new AsideItem('Aside with Breadcrumb', '/aside-with-breadcrumb', true),
  ];

  breadcrumb = new Menu([
    new MenuItem('Aside', '/aside', true, true),
    new MenuItem('Breadcrumb', '/aside-with-breadcrumb', true, true)
  ]);

  ngOnInit() {
    this.header.people = this.people;
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

  formAction() {
    return false;
  }
}
