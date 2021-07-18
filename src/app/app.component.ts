import { Component } from '@angular/core';
import {Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [ 
    {id:1, name:'Wooo'}  ,
     {id:2, name:'Bullets'} ,
   { id:3 ,name:'Games'},
   {id:4 ,name:'Greatness is here'},
   {id:5 ,name: 'Do your math' },
   {id:6,name:'Plot my world domination plan'}
  ];
}
