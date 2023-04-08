import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
   id:number;
   editMode=false;
  constructor(private activatedRoute:ActivatedRoute,recipeService:RecipeService) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
       this.id= +params['id']; // + convert to number
       this.editMode=params['id']!=null;
    })
  }
  newRecipe(){
  }

}
