import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { DevPageComponent } from './pages/dev-page/dev-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  // {path: 'components', component: ComponentsPageComponent},
  // {path: 'components/brand', component: BrandComponent},
  // {path: 'components/form', component: FormComponent},
  // {path: 'components/datepicker', component: DatepickerComponent},
  {path: 'directives', component: DirectivesPageComponent},
  {path: 'services', component: ServicesPageComponent},
  {path: 'dev', component: DevPageComponent},
  // {path: 'components/select', component: SelectPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
