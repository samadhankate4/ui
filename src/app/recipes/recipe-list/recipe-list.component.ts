import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 
 recipes:Recipe[];

  constructor(private recipeService:RecipeService,private route:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }
  createNewRecipe(){
  this.route.navigate(['new'],{relativeTo:this.activeRoute});

  }
}
