import { NgModule } from '@angular/core';
import { DirectivesComponent } from './directives.component';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {path: 'directives', component: DirectivesComponent,
    children: [
      {path: '', redirectTo: '/directives/grid', pathMatch: 'full'},
      {path: 'grid', component: GridComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
