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
  new Quote (1,'Wooo', 'Ric Flair') ,
  new Quote  (2,'Bullets','Stretch') ,
  new Quote( 3 ,'Games', 'Monopoly'),
  new Quote (4 ,'Greatness is here', 'Al Pac'),
  new Quote (5 , 'Do your math' , 'Batman'),
 new Quote (6,'Plot my world domination plan', 'Doom'),
 ];
}