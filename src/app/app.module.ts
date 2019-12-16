import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent, FirstComponent, SecondComponent } from './examples/start.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ElementRefExampleComponent } from './examples/ElementRef.component';
import { ElementRefDirectiveExampleComponent, ElementRefDirective } from './examples/ElementRef.directive';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FirstComponent,
    SecondComponent,
    NavigationComponent,
    ElementRefExampleComponent,
    ElementRefDirectiveExampleComponent,
    ElementRefDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
