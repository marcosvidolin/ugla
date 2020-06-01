import { UglaRulesService } from './ugla-rules.service';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { VwDirective } from './directives/vw.directive';
import { EdDirective } from './directives/ed.directive';
import { CrDirective } from './directives/cr.directive';
import { DeDirective } from './directives/de.directive';

@NgModule({
  declarations: [
    VwDirective,
    EdDirective,
    CrDirective,
    DeDirective
  ],
  imports: [],
  exports: [
    VwDirective,
    EdDirective
  ],
  providers: [UglaRulesService]
})
export class UglaRulesModule {
  constructor(@Optional() @SkipSelf() parentModule: UglaRulesModule) {}

  static forRoot(application: string): ModuleWithProviders {
    return {
      ngModule: UglaRulesModule,
      providers: [
        { provide: String, useValue: application }
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: UglaRulesModule,
      providers: []
    };
  }
}
