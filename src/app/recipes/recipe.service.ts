import { EventEmitter,Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingrident } from "../shared/ingrident.model";
import { ShopingService } from "../shopping-list/shoping.service";
import { Subject } from "rxjs";


@Injectable()
export class RecipeService{
    recipes:Recipe[]=[
        new Recipe("test recipe",
        "myfirst recipe",
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
        [new Ingrident('Meat',1),
        new Ingrident('White souce',1)]),
        new Recipe("New recipe","My new recipe","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",
        [new Ingrident('spice',1)])
     
      ];
      constructor(private shoppingService:ShopingService){

      }
      getRecipe(index:number){
       return  this.recipes.slice()[index];
      }
      getRecipes(){
        return this.recipes.slice();
      }
      addIngridentsToShoppingList(ingridents:Ingrident[]){
        this.shoppingService.addIngridents(ingridents)

      }
      addNewRecipe(newRecipe:Recipe){
        this.recipes.push(newRecipe);
      }
      editRecipe(index:number,newRecipe:Recipe){
        
            //this.recipeSelected[index].name=newRecipe.name;
            //this.recipeSelected[index].description=newRecipe.description;
          
        }
      
}