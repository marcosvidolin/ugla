import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.scss']
})
export class ListOptionsComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  ngOnInit() {
  }

}
