import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ugl-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit {

  texts = {
    confirm: 'Confirm',
    cancel: 'Cancel',
    title: 'Title',
    icon: ' <i class="material-icons" aria-hidden="true">radio</i>',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut.',
    type: 'warning'
  };

  constructor() { }

  ngOnInit() {
    console.log('Modal2');
  }

}
