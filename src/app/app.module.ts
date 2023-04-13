import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { DropdownDirective } from './shared/dropdown.directives';
import { ShopingService } from './shopping-list/shoping.service';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingModule } from './shopping-list/shopping-module';
import { RecipeModule } from './recipes/recipe.module';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading.spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShoppingModule,
    RecipeModule
  ],
  providers: [
    ShopingService,
    RecipeService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: MyInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
