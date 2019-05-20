import { Component, OnInit } from '@angular/core';
import { List, Link, Options } from 'projects/ugla/src';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss']
})
export class ComponentsPageComponent implements OnInit {

  constructor() { }

  public list: List;
  public radioItems: Options[];

  ngOnInit() {
    this.radioItems = [new Options('Recovery', '1', false, '#d71f3c', 'radios'),
    new Options('Training', '2', false, '#656565', 'radios'),
    new Options('Developing', '3', false, '#656565', 'radios'),
    new Options('Observed', '3', true, '#656565', 'radios'),
    new Options('Observed with honors', '3', false, '#656565', 'radios')];

    this.list = new List('components-list');
    this.list.name = 'components-list';
    this.list.links = [
      new Link('Brand', '/components/brand', false, 'Brand', 'component-brand'),
      new Link('Button', '/components/button', false, 'Button', 'component-button'),
      new Link('Cards', '/components/cards', false, 'Cards', 'component-cards'),
      new Link('Checkbox', '/components/checkbox', false, 'Checkbox', 'component-checkbox'),
      new Link('Datepicker', '/components/datepicker', false, 'Datepicker', 'component-datepicker'),
      new Link('Field', '/components/field', false, 'Field', 'component-field'),
      new Link('File Upload', '/components/file-upload', false, 'File Upload', 'component-file-upload'),
      new Link('Filter', '/components/filter', false, 'Filter', 'component-filter'),
      new Link('Form', '/components/form', false, 'Form', 'component-form'),
      new Link('Header', '/components/header', false, 'Header', 'component-header'),
      new Link('List Links', '/components/list-links', false, 'List Links', 'component-list-links'),
      new Link('List Options', '/components/list-options', false, 'List Options', 'component-list-options'),
      new Link('Login', '/components/login', false, 'Login', 'component-login'),
      new Link('Pagination', '/components/pagination', false, 'Pagination', 'component-pagination'),
      new Link('People Card', '/components/people-card', false, 'People Card', 'component-people-card'),
      new Link('Select', '/components/select', false, 'Select', 'component-select'),
      new Link('Switch', '/components/switch', false, 'Switch', 'component-switch'),
      new Link('Tables', '/components/tables', false, 'Tables', 'component-tables'),
      new Link('Toolbar', '/components/toolbar', false, 'Toolbar', 'component-toolbar')
    ];
  }

}
