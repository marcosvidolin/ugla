import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List, Link } from 'projects/ugla/src';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  constructor(private router: Router) { }

  public list: List;

  isActiveItem(item: string) {
    return this.router.url === item;
  }

  ngOnInit() {
    this.list = new List('components-list');
    this.list.name = 'components-list';
    this.list.links = [
      new Link('Grid', '/directives/grid', this.isActiveItem('/directives/grid'), 'Grid', 'd-grid'),
    ];
  }

}
