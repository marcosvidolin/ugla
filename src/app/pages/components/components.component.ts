import { Component, OnInit } from '@angular/core';
import { List, Link } from 'projects/ugla/src';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(private router: Router) { }

  public list: List;

  isActiveItem(item: string) {
    return this.router.url === item;
  }

  ngOnInit() {
    this.list = new List('components-list');
    this.list.name = 'components-list';
    this.list.links = [
      new Link('Brand', '/components/brand', this.isActiveItem('/components/brand'), 'Brand', 'c-brand'),
      new Link('Button', '/components/button', this.isActiveItem('/components/button'), 'Button', 'c-button'),
      new Link('Cards', '/components/cards', this.isActiveItem('/components/cards'), 'Cards', 'c-cards'),
      new Link('Checkbox', '/components/checkbox', this.isActiveItem('/components/checkbox'), 'Checkbox', 'c-checkbox'),
      new Link('Datepicker', '/components/datepicker', this.isActiveItem('/components/datepicker'), 'Datepicker', 'c-datepicker'),
      new Link('Field', '/components/field', this.isActiveItem('/components/field'), 'Field', 'c-field'),
      new Link('File Upload', '/components/file-upload', this.isActiveItem('/components/file-upload'), 'File Upload', 'c-file-upload'),
      new Link('Filter', '/components/filter', this.isActiveItem('/components/filter'), 'Filter', 'c-filter'),
      new Link('Form', '/components/form', this.isActiveItem('/components/form'), 'Form', 'c-form'),
      new Link('Header', '/components/header', this.isActiveItem('/components/header'), 'Header', 'c-header'),
      new Link('List Links', '/components/list-links', this.isActiveItem('/components/list-links'), 'List Links', 'c-list-links'),
      new Link('List Options', '/components/list-options', this.isActiveItem('/components/list-options'), 'List Options', 'c-list-options'),
      new Link('Login', '/components/login', this.isActiveItem('/components/login'), 'Login', 'c-login'),
      new Link('Pagination', '/components/pagination', this.isActiveItem('/components/pagination'), 'Pagination', 'c-pagination'),
      new Link('People Card', '/components/people-card', this.isActiveItem('/components/people-card'), 'People Card', 'c-people-card'),
      new Link('Select', '/components/select', this.isActiveItem('/components/select'), 'Select', 'c-select'),
      new Link('Switch', '/components/switch', this.isActiveItem('/components/switch'), 'Switch', 'c-switch'),
      new Link('Tables', '/components/tables', this.isActiveItem('/components/tables'), 'Tables', 'c-tables'),
      new Link('Toolbar', '/components/toolbar', this.isActiveItem('/components/toolbar'), 'Toolbar', 'c-toolbar')
    ];
  }
}
