import { UglaRulesService } from './../ugla-rules.service';
import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[uglEd]'
})
export class EdDirective implements OnInit {
  constructor(private rules: UglaRulesService,
              private element: ElementRef) {}

  ngOnInit() {
    if (!this.rules.edit()) {
      this.element.nativeElement.remove();
    }
  }
}
