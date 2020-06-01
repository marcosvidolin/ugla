import { UglaRulesService } from './../ugla-rules.service';
import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[uglDe]'
})
export class DeDirective implements OnInit {
  constructor(private rules: UglaRulesService,
              private element: ElementRef) {}

  ngOnInit() {
    if (!this.rules.delete()) {
      this.element.nativeElement.remove();
    }
  }
}
