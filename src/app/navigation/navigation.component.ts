import { Component, OnInit, Input } from '@angular/core';

import {RouteMetadata, routesInfo} from '../app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  routes: RouteMetadata[] = routesInfo;

  constructor() { }

  ngOnInit() {
  }

}
