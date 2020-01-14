import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { MealPlanComponent } from './meal-plans/meal-plan/meal-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    MealPlansComponent,
    MealPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
