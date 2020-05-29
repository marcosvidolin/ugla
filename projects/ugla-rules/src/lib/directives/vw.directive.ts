import { UglaRulesService } from './../ugla-rules.service';
import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[uglVw]'
})
export class VwDirective implements OnInit {
  constructor(private rules: UglaRulesService,
              private element: ElementRef) {}

  ngOnInit() {
    if (!this.rules.vw()) {
      this.element.nativeElement.remove();
    }
  }
}
