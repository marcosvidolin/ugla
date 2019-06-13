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
import { ComponentsModule } from './pages/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    DirectivesPageComponent,
    ServicesPageComponent,
    DevPageComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    UglaModule.forRoot({themeName: Themes.YELLOW})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
