import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { VwDirective } from './directives/vw.directive';
import { EdDirective } from './directives/ed.directive';

@NgModule({
  declarations: [
    VwDirective,
    EdDirective
  ],
  imports: [],
  exports: [
    VwDirective,
    EdDirective
  ]
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
