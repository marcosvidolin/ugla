import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { UglaModule, Themes } from 'projects/ugla/src';
import { BrandComponent } from './brand/brand.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormComponent } from './form/form.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FieldComponent } from './field/field.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { ListLinksComponent } from './list-links/list-links.component';
import { ListOptionsComponent } from './list-options/list-options.component';
import { LoginComponent } from './login/login.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { SwitchComponent } from './switch/switch.component';
import { TablesComponent } from './tables/tables.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
    ComponentsComponent,
    BrandComponent,
    DatepickerComponent,
    FormComponent,
    SelectComponent,
    ButtonComponent,
    CardsComponent,
    CheckboxComponent,
    FieldComponent,
    FileUploadComponent,
    FilterComponent,
    HeaderComponent,
    ListLinksComponent,
    ListOptionsComponent,
    LoginComponent,
    PaginationComponent,
    PeopleCardComponent,
    SwitchComponent,
    TablesComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    UglaModule
  ]
})
export class ComponentsModule { }
