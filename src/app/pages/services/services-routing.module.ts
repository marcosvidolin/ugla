import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {path: 'services', component: ServicesComponent,
    children: [
      {path: '', redirectTo: '/services/modal', pathMatch: 'full'},
      {path: 'modal', component: ModalComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
