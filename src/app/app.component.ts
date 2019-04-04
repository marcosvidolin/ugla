import { Component, OnInit } from '@angular/core';
import { Header, People, Menu, MenuItem, Select, Options, LotusService } from 'projects/lotus/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private vanilla: LotusService) {}

  public isAutenticated: boolean;

  public header = new Header('Lotus',
  'https://firebasestorage.googleapis.com/v0/b/vanilla-js-acf1d.appspot.com/o/vania.png' +
  '?alt=media&token=f6c6b19c-0aaf-4cd8-84dd-5cd89ed61a82');
  
  public people = new People('Regivaldo Silva', 'regivaldo@ciandt.com',
  'https://firebasestorage.googleapis.com/v0/b/vanilla-js-acf1d.appspot.com/o/vania.png' +
  '?alt=media&token=f6c6b19c-0aaf-4cd8-84dd-5cd89ed61a82');

  public menu = new Menu([
    new MenuItem('Home', '/', true),
    new MenuItem('Login', '/login', true),
    new MenuItem('Buttons', '/buttons', true),
    new MenuItem('Form', '/form', true),
    new MenuItem('Notifications', '/notifications', true),
    new MenuItem('Dashboard', '/dashboard', true, true),
    new MenuItem('Table', '/table', true),
    new MenuItem('Doc', 'https://vanilla-js-acf1d.firebaseapp.com/doc', true)
  ]);

  public select = new Select('language1', [
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
    this.isAutenticated = true;
    this.vanilla.headerShadow = true;
    this.vanilla.hasToolBar();
  }

  logout(status) {
    console.log('Logout');
  }

  selectLanguage(language) {
    console.log(`Language selected is ${language.description} and the code is ${language.value}`);
  }
}
