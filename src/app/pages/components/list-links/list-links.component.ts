import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss']
})
export class ListLinksComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  ngOnInit() {
  }

}
