import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  ngOnInit() {
  }

}
