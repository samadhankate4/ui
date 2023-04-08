import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';
import { ShopingService } from './shoping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
 
})
export class ShoppingListComponent implements OnInit {

  ingridents:Ingrident[];
  constructor(private shopingService:ShopingService) { }

  ngOnInit(): void {
    this.ingridents=this.shopingService.getIngridents();
  }

}
