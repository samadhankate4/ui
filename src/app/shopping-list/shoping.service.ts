import { Ingrident } from "../shared/ingrident.model";

export class ShopingService{
   private ingridents:Ingrident[]=[
        new Ingrident("Apple",5),
        new Ingrident("Tomato",10)
      ];

      getIngridents(){
       return this.ingridents;
      }
      addIngrident(ingrident: Ingrident){
        this.ingridents.push(ingrident);
      }
      addIngridents(ingridents: Ingrident[]){
        this.ingridents.push(...ingridents);

      }
}