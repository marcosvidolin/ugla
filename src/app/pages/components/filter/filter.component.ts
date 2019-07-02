import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  ngOnInit() {
  }

}
