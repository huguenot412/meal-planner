import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { MealPlanComponent } from './meal-plans/meal-plan/meal-plan.component';
import { MealComponent } from './meal-plans/meal/meal.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewMealPlanComponent } from './meal-plans/new-meal-plan/new-meal-plan.component';
import { RecipeComponent } from './cookbook/recipe/recipe.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MealPlansComponent,
    MealPlanComponent,
    MealComponent,
    CookbookComponent,
    ShoppingListComponent,
    NewMealPlanComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
