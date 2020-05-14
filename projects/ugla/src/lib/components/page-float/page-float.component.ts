import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { animate, style, trigger, transition, state } from '@angular/animations';
import { UglaService } from '../../ugla.service';


@Component({
  selector: 'ugl-page-float',
  templateUrl: './page-float.component.html',
  styleUrls: ['./page-float.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        right: '0',
        opacity: '1'
      })),
      state('close', style({
        right: '-50%',
        opacity: '0'
      })),
      transition('* => open', [
        animate('.5s')
      ]),
      transition('* => close', [
        animate('.5s')
      ])
    ])
  ]
})
export class PageFloatComponent implements OnInit, OnChanges {
  @Input() show: boolean;
  @Input() title: string;

  @Output() cancelButton = new EventEmitter<boolean>();
  @Output() confirmButton = new EventEmitter<boolean>();

  theme: string;
  color: string;

  constructor(private ugla: UglaService) { }

  ngOnInit() {
    this.theme = this.ugla.theme;
    this.color = this.ugla.color;
  }

  ngOnChanges(changes: SimpleChanges) {
    const SHOW = 'show';
    const TITLE = 'title';

    if (changes[SHOW] !== undefined) {
      this.show = changes.show.currentValue;
    }

    if (changes[TITLE] !== undefined) {
      this.title = changes.title.currentValue;
    }
  }

  cancel() {
    this.cancelButton.emit(false);
  }

  confirm() {
    this.confirmButton.emit(false);
  }
}
