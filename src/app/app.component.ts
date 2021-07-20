import { Component } from '@angular/core';
import {Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
quotes:Quote[] = [ 
  new Quote (1,'Wooo', 'Ric Flair',new Date(2020,3,14)) ,
  new Quote  (2,'Bullets','Stretch',new Date(2019,6,9)),
  new Quote( 3 ,'Games', 'Monopoly', new Date(2022,1,12)),
  new Quote (4 ,'Greatness is here', 'Al Pac',new Date(2018,2,14)),
  new Quote (5 , 'Do your math' , 'Batman', new Date(2017,7,7)),
 new Quote (6,'Plot my world domination plan', 'Doom', new Date(2030,3,14)),
 ];
}