import { MenuItem } from './../../../../projects/ugla/src/lib/models/menu-item';
import { Menu } from './../../../../projects/ugla/src/lib/models/menu';
import { People } from './../../../../projects/ugla/src/lib/models/people';
import { DatepickerComponent } from './../../../../projects/ugla/src/lib/components/datepicker/datepicker.component';
import { ToastService } from './../../../../projects/ugla/src/lib/components/toast/toast.service';
import { LightboxService } from './../../../../projects/ugla/src/lib/components/lightbox/lightbox.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'projects/ugla/src';
import Tooltip from 'tooltip.js';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {
  people = new People('Regivaldo Silva',
                      'regivaldorfs@gmail.com',
                      'https://lh6.googleusercontent.com/proxy/zVJCBiGDPk0lFxTm9dzhALLxH8kILxcS73wtk1D0neLJLGk1axcgEZyPvvlqXkXY3_ehxyQt5Y5Tsi3jhGjJmxkh5oLm9_GYbJO6AwHEpFDAZQQX3uN9RHYS-VOG6lwOgsN9EgkuGkhGyupSdy-jZ0f-YLcbSiX4E5qaIV4aP5weeyvnCWPJEmzj1IMh2u11310iEKHeFw');

  menu = new Menu([
    new MenuItem('Atestados', '/atestados', true, true),
    new MenuItem('Exame Periódico', '/atestados', true, true),
    new MenuItem('Colaboradores', '/colaboradores', true, true)
  ]);

  breadcrumb = new Menu([
    new MenuItem('Colaboradores', '/colaboradores', true, true),
    new MenuItem('Detalhes', '/colaboradores/id', true, true),
  ]);

  constructor() { }

  ngOnInit() {}
}
