import { Component, ElementRef, OnInit, OnDestroy,ViewChild } from '@angular/core';

import {Ingrident} from '../../shared/ingrident.model'
import { ShopingService } from '../shoping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') ngForm:NgForm;
  ingident:Ingrident;
  currentItemIndex:number;
  editMode=false;

  subscription:Subscription;

  constructor(private shoppingService:ShopingService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription=this.shoppingService.subject.subscribe((index:number)=>{
      this.editMode=true;
      this.currentItemIndex=index;
      this.ingident= this.shoppingService.getIngrident(index);
      this.ngForm.setValue({
        "name": this.ingident.name,
        "amount":this.ingident.amount
      });
         
    })
  }

   
  

  onFormSubmit(form: NgForm){
    const value=form.value;
    const newIngrident=
    new Ingrident(
     value.name,
      value.amount
      );

      if(this.editMode){
        this.shoppingService.updateIngrident(this.currentItemIndex,newIngrident);
      }
      else{
        this.shoppingService.addIngrident(newIngrident);
      }
form.reset();
this.editMode=false;
  }
  remove(){
this.shoppingService.removeIngrident(this.currentItemIndex);
  }
  clear(){
    this.ngForm.reset();
    this.editMode=false;
  }
}
