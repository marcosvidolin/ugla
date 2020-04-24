import { Component, OnInit } from '@angular/core';
import { Header, People, Menu, MenuItem, Select, Options, UglaService, ToastService } from 'projects/ugla/src';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private ugla: UglaService,
    private router: Router) {
      this.routeEvent(this.router);
    }

  isAutenticated = true;

  header = new Header('Ugla', './assets/imgs/logo.png', 'home', true);

  people = new People('Jack Connor', 'jack.connor@ugla.dev', './assets/imgs/people.png');

  menu = new Menu([
    new MenuItem('Home', '/', true),
    new MenuItem('Login', '/login', true),
    new MenuItem('E2E', '/e2e', true),
    new MenuItem('Test page', '/dev', true),
  ]);

  select = new Select('language', [
    new Options('Select a language', '-1'),
    new Options('Portuguese PT-BR', 'pt-br'),
    new Options('English EN', 'en'),
    new Options('日本人', 'jp'),
    new Options('汉语', 'ch_st'),
    new Options('漢語', 'ch_tr')
  ]);

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.header.menu.items.filter((item) => {
          return item.active = false;
        });

        if (this.router.url === '/') {
          this.header.menu.items[0].active = true;
        } else if (this.router.url === '/login') {
          this.header.menu.items[1].active = true;
        } else if (this.router.url.indexOf('/components') > -1) {
          this.header.menu.items[2].active = true;
        } else if (this.router.url.indexOf('/directives') > -1) {
          this.header.menu.items[3].active = true;
        } else if (this.router.url.indexOf('/services') > -1) {
          this.header.menu.items[4].active = true;
        }
      }
    });
  }

  ngOnInit() {
    this.header.people = this.people;
    this.header.menu = this.menu;
    this.ugla.headerShadow = true;
    this.ugla.hasToolBar();
  }

  logout(status) {
    console.log('Logout');
  }

  selectLanguage(language) {
    console.log(`Language selected is ${language.description} and the code is ${language.value}`);
  }
}
