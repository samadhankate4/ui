import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import {FormGroup,FormControl,FormArray,Validators} from "@angular/forms"
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
   id:number;
   editMode=false;
   recipeForm:FormGroup;
   recipe:Recipe;
  constructor(private activatedRoute:ActivatedRoute,private recipeService:RecipeService) { 
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
       this.id= +params['id']; // + convert to number
       this.editMode=params['id']!=null;
       this.recipe=this.recipeService.getRecipe(this.id);
       this.initForm()
       
    })
  }
  initForm(){
    let name='';
    let imagePath=''
    let description='';
    let recipeIngridents= new FormArray([]);
    if(this.editMode){
      name=this.recipe.name;
      imagePath=this.recipe.imagePath;
      description=this.recipe.description;
      if(this.recipe['ingridents']){
        for(let ingrident of this.recipe.ingridents){
          recipeIngridents.push(new FormGroup({
            name: new FormControl(ingrident.name,Validators.required),
            amount: new FormControl(ingrident.amount,
              [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }
          ))
        }
      }
    }
    this.recipeForm=new FormGroup({
      name:new FormControl(name,Validators.required),
      imagePath:new FormControl(imagePath,Validators.required),
      description:new FormControl(description,Validators.required),
      ingridents: recipeIngridents
   
    }

    );
  }
  getControls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingridents')).controls;
  }

  addNewIngrident(){
    (<FormArray>this.recipeForm.get('ingridents'))
    .push(new FormGroup({
      name:new FormControl(''),
      amount:new FormControl('')
    }))
  }


  onSubmit (){
  
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)

    }
    else{
      this.recipeService.addNewRecipe(this.recipeForm.value);
    }

  }

}
