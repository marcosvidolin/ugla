import { UglaRulesService } from './../ugla-rules.service';
import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[uglCr]'
})
export class CrDirective implements OnInit {

  constructor(private rules: UglaRulesService,
              private element: ElementRef) {}

  ngOnInit() {
    if (!this.rules.create()) {
      this.element.nativeElement.remove();
    }
  }
}
