import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {Ingrident} from '../../shared/ingrident.model'
import { ShopingService } from '../shoping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private shoppingService:ShopingService) { }

  ngOnInit(): void {
  }

  add(){
  const newIngrident=new Ingrident(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
      );
    
      this.shoppingService.addIngrident(newIngrident);
      console.log(newIngrident.name);
  }
  remove(){

  }
  clear(){

  }
}
