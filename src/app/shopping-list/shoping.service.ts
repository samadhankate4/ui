import { Ingrident } from "../shared/ingrident.model";
import { Subject } from "rxjs"

export class ShopingService{
   private ingridents:Ingrident[]=[
        new Ingrident("Apple",5),
        new Ingrident("Tomato",10)
      ];

      subject= new Subject<number>();

      getIngridents(){
       return this.ingridents;
      }
      addIngrident(ingrident: Ingrident){
        this.ingridents.push(ingrident);
      }
      addIngridents(ingridents: Ingrident[]){
        this.ingridents.push(...ingridents);

      }
      getIngrident(index:number){
        return this.ingridents[index];
       }
       updateIngrident(index:number,ingrident: Ingrident){
        this.ingridents[index]=ingrident;
       }
       removeIngrident(index:number){
        this.ingridents.splice(index,1);
       }

}