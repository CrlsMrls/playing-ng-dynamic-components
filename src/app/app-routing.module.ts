import { NgModule, Component, Type } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { StartComponent, FirstComponent, SecondComponent } from './examples/start.component';
import {ElementRefExampleComponent} from './examples/ElementRef.component';
import { ElementRefDirectiveExampleComponent } from './examples/ElementRef.directive';

export interface RouteMetadata extends Route {
  title?: string;
}

export const routesInfo: RouteMetadata[] = [
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'first',
    title: '@ViewChild in template reference',
    component: ElementRefExampleComponent,
  },
  {
    path: 'second',
    title: '@ViewChild in directive',
    component: ElementRefDirectiveExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routesInfo)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
