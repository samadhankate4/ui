import { EventEmitter,Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingrident } from "../shared/ingrident.model";
import { ShopingService } from "../shopping-list/shoping.service";
import { BehaviorSubject, Subject, map } from "rxjs";
import { DataService } from "../shared/data.service";


@Injectable()
export class RecipeService{
    recipes:Recipe[]=[];
    recipeSubject:BehaviorSubject<Recipe[]>=new BehaviorSubject([]);
      constructor(private shoppingService:ShopingService,private dataService:DataService){
        
      }
      getRecipe(index:number){
       return  this.recipes[index];
      }
      getRecipes(){
        return this.dataService.getRecipie()
        .subscribe((response)=>{
                  console.log(response);
                 this.recipes=response;
                 this.recipeSubject.next(response);
        },
        (error)=>{
          console.log("recipe fetch error "+error);
        }
        );
      }
      addIngridentsToShoppingList(ingridents:Ingrident[]){
        this.shoppingService.addIngridents(ingridents)

      }
      addNewRecipe(newRecipe:Recipe){
        this.dataService.saveRecipie(newRecipe)
        .subscribe((response: Recipe)=>{

          this.recipes.push(response);

        },(error)=>{
          console.log(error);

        })
        
      }

        updateRecipe(id:number,recipe:Recipe){
                    this.recipes[id]=recipe;

        }
      
}