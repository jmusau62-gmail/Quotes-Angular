import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [ 
   new Quote (1,'Wooo', 'Ric Flair') ,
   new Quote  (2,'Bullets','Stretch') ,
   new Quote( 3 ,'Games', 'Monopoly'),
   new Quote (4 ,'Greatness is here', 'Al Pac'),
   new Quote (5 , 'Do your math' , 'Batman'),
  new Quote (6,'Plot my world domination plan', 'Doom'),
  ];
}

toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}
