import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
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


const routes: Routes = [
  {path: 'components', component: ComponentsComponent,
    children: [
      { path: 'brand', component:  BrandComponent},
      { path: 'button', component:  ButtonComponent},
      { path: 'cards', component:  CardsComponent},
      { path: 'checkbox', component:  CheckboxComponent},
      { path: 'datepicker', component:  DatepickerComponent},
      { path: 'field', component:  FieldComponent},
      { path: 'file-upload', component:  FileUploadComponent},
      { path: 'filter', component:  FilterComponent},
      { path: 'form', component:  FormComponent},
      { path: 'header', component:  HeaderComponent},
      { path: 'list-links', component:  ListLinksComponent},
      { path: 'list-options', component:  ListOptionsComponent},
      { path: 'login', component:  LoginComponent},
      { path: 'pagination', component:  PaginationComponent},
      { path: 'people-card', component:  PeopleCardComponent},
      { path: 'select', component:  SelectComponent},
      { path: 'switch', component:  SwitchComponent},
      { path: 'tables', component:  TablesComponent},
      { path: 'toolbar', component:  ToolbarComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
