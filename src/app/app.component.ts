import { Component } from '@angular/core';
import { Init } from './interfaces/init';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MinSidekammerat';
  init: Init;

  constructor(){
    this.init = {id: 0, name: 'MinSidekammerat'};
  }

  HelloWold(init: Init){
    
  }
}
