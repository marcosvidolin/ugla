import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { UglaModule } from 'projects/ugla/src';
import { GridComponent } from './grid/grid.component';
import { HighlightModule } from 'ngx-highlightjs';
@NgModule({
  declarations: [
    DirectivesComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    HighlightModule,
    UglaModule.forChild()
  ]
})
export class DirectivesModule { }
