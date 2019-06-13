import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ModalComponent } from './modal/modal.component';
import { UglaModule } from 'projects/ugla/src';

@NgModule({
  declarations: [
    ServicesComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    UglaModule
  ]
})
export class ServicesModule { }
