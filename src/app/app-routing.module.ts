import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketDetailListComponent } from './rocket-detail-list/rocket-detail-list.component';

const routes: Routes = [
  {
    path : "",
    component : RocketDetailListComponent
  },
  {
    path : "filter/:id",
    component : RocketDetailListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
