import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import {Ingrident} from '../../shared/ingrident.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingridentAdded=new EventEmitter<Ingrident>();

  constructor() { }

  ngOnInit(): void {
  }

  add(){
  const newIngrident=new Ingrident(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
      );
    
      this.ingridentAdded.emit(newIngrident);
      console.log(newIngrident.name);
  }
  remove(){

  }
  clear(){

  }
}
