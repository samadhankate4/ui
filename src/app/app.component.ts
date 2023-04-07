import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myRecipe';
  loadedFeature="recipe";
  onNavigate(fetature:string){
this.loadedFeature=fetature;

  }
}
