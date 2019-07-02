import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DevPageComponent } from './pages/dev-page/dev-page.component';
import { ComponentsComponent } from './pages/components/components.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dev', component: DevPageComponent},
  {path: 'components', loadChildren: './pages/components/components.module#ComponentsModule'},
  {path: 'services', loadChildren: './pages/services/services.module#ServicesModule'},
  {path: 'directives', loadChildren: './pages/directives/directives.module#DirectivesModule'}
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
