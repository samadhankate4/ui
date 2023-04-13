import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
const routes:Routes=[  {
    path:'recipes',component:RecipesComponent, 
  children:[
     {path:'',component:RecipeStartComponent},
      {path:'new',component:RecipeEditComponent },
      {path:':id',component:RecipeDetailComponent },
      {path:':id/edit',component:RecipeEditComponent}
 ]
  }];
@NgModule({
    declarations:[ RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeItemComponent],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule

    ]

    //exports:[RecipesComponent,RecipeDetailComponent,RecipeEditComponent,RecipeItemComponent,RecipeStartComponent]
})
export class RecipeModule{

}