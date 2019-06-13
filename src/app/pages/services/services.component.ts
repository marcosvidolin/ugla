import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List, Link } from 'projects/ugla/src';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  public list: List;

  isActiveItem(item: string) {
    return this.router.url === item;
  }

  ngOnInit() {
    this.list = new List('services-list');
    this.list.name = 'services-list';
    this.list.links = [
      new Link('Modal', '/services/modal', this.isActiveItem('/services/modal'), 'Modal', 's-modal'),
    ];
  }

}
