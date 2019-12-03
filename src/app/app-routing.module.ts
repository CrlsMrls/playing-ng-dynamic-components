import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent, FirstComponent, SecondComponent } from './examples/start.component';

export interface RouteMetadata {
  path: string;
  text: string;
}

export const routesInfo: RouteMetadata[] = [
  {
    path: 'first',
    text: 'First example'
  },
  {
    path: 'second',
    text: 'Second example'
  }
];

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: routesInfo[0].path,
    component: FirstComponent
  },
  {
    path: routesInfo[1].path,
    component: SecondComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
