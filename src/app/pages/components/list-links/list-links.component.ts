import { Component, OnInit } from '@angular/core';
import { UglaService, List, Link } from 'projects/ugla/src';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss']
})
export class ListLinksComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;
  public links: List = new List('filter', [
    new Link('Link without path', null, true), new Link('Link with path', 'dev', false)
  ]);

  ngOnInit() {
  }

  clickLink(event) {
    console.log(`Clicked: ${event}`);
  }

}
