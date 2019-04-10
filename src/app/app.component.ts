import { Component, OnInit } from '@angular/core';
import { Header, People, Menu, MenuItem, Select, Options, UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private ugla: UglaService) {}

  isAutenticated = false;

  header = new Header('Ugla', './assets/imgs/logo.png');

  people = new People('Regivaldo Silva', 'regivaldo@ciandt.com', './assets/imgs/people.png');

  menu = new Menu([
    new MenuItem('Home', '/', true),
    new MenuItem('Login', '/login', true),
    new MenuItem('Components', '/components', true),
    new MenuItem('Directives', '/directives', true),
    new MenuItem('Services', '/services', true),
    new MenuItem('Docs', '/docs', true)
  ]);

  select = new Select('language', [
    new Options('Select a language', '-1'),
    new Options('Portuguese PT-BR', 'pt-br'),
    new Options('English EN', 'en'),
    new Options('日本人', 'jp'),
    new Options('汉语', 'ch_st'),
    new Options('漢語', 'ch_tr')
  ]);

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
