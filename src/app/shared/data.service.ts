import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Observable } from "rxjs";
import { exhaustMap, map, take } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
@Injectable({providedIn:"root"})
export class DataService{

    constructor(private http:HttpClient,private authSerrvice:AuthService){}

    saveRecipie(recipes:Recipe):Observable<any>|any{
        return this.http.post("https://myrecipe-2463f-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json",recipes);
    

    }
    getRecipie(){
       return this.authSerrvice.subject.pipe(take(1),exhaustMap(user=>{
            return this.http.get<Recipe[]>("https://myrecipe-2463f-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json",
           {params: new HttpParams().set('auth',user.token)}
            )
        }),
        map(recipes=>{

            const fetchRecipes:Recipe[]=[];
            for (let key in recipes) {
              if(recipes.hasOwnProperty(key))
              fetchRecipes.push({...recipes[key],id:key});
            }
            console.log(recipes);
            return fetchRecipes;
        })
        
        )
      
        
        
        
    

    }

}