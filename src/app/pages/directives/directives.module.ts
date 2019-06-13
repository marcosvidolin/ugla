import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { UglaModule } from 'projects/ugla/src';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    DirectivesComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    UglaModule
  ]
})
export class DirectivesModule { }
