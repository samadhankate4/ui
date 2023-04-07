import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Output() onRecipeItemSelect= new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  showDetails(){
    this.onRecipeItemSelect.emit();
    console.log(" recive item selected");
  }

}
