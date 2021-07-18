
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}

