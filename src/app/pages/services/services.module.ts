import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ModalComponent } from './modal/modal.component';
import { UglaModule } from 'projects/ugla/src';

import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    ServicesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    UglaModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
  ]
})
export class ServicesModule { }
