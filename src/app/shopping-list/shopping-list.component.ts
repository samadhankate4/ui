import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridents:Ingrident[]=[
    new Ingrident("Apple",5),
    new Ingrident("Tomato",10)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngridentAdded(ingrident: Ingrident){
    alert(ingrident.name);
    this.ingridents.push(ingrident);
  }
}
