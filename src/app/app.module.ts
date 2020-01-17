import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { MealPlanComponent } from './meal-plans/meal-plan/meal-plan.component';
import { MealComponent } from './meal-plans/meal/meal.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NewMealPlanComponent } from './meal-plans/new-meal-plan/new-meal-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    MealPlansComponent,
    MealPlanComponent,
    MealComponent,
    CookbookComponent,
    ShoppingListComponent,
    NewMealPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
