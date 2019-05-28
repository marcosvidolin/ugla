import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UglaModule, Themes } from 'projects/ugla/src';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { DevPageComponent } from './pages/dev-page/dev-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { BrandComponent } from './pages/components-page/brand/brand.component';
import { FormComponent } from './pages/components-page/form/form.component';
import { DatepickerComponent } from './pages/components-page/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ComponentsPageComponent,
    DirectivesPageComponent,
    ServicesPageComponent,
    DevPageComponent,
    BrandComponent,
    FormComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UglaModule.forRoot({themeName: Themes.YELLOW})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
