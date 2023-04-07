import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[]=[
   new Recipe("test recipe","myfirst recipe","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"),
   new Recipe("New recipe","My new recipe","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505")

 ];
 @Output() onRecipeSelect= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeChoose(recipe:Recipe){
    this.onRecipeSelect.emit(recipe);
    console.log("emited to list"+recipe);
  }
}
