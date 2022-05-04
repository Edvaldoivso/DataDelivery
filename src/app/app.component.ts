import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <router-outlet><h1> {{ title }} </h1></router-outlet>
  <app-food-list></app-food-list>
  `,
})
export class AppComponent {
  title = 'DataDelivery';
}


/**
 * 
 */
 let title : string =   "Exercicos de Dados"
