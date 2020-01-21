import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { IMealPlan } from './interfaces';
import { MealPlan, Meal } from './classes';
import { MealPlanMap } from './types';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MealPlansService {

  private mealPlans: MealPlan[] = [];
  private mealPlanMap: MealPlanMap = {};

  constructor() { }

  createMealPlanMap(): void {
    this.mealPlans.forEach(mealPlan => this.mealPlanMap[mealPlan.id] = mealPlan);
  }

  getMeals(): MealPlanMap {
    this.createMealPlanMap();
    return this.mealPlanMap;
  }

  addMealPlan(date: moment.Moment, meals: Meal[]) {
    this.mealPlans.push(new MealPlan(date, meals));
  }

  addMeal(mealPlan: MealPlan, newMeal: string): void {
    this.createMealPlanMap();
    if(this.mealPlanMap[mealPlan.id]) {
     this.mealPlanMap[mealPlan.id].meals.push(new Meal(newMeal));
    } else {
      this.addMealPlan(mealPlan.date, [new Meal(newMeal)]);
    }  
  }

  deleteMeal(mealPlanId: string, mealId: number): void {
    this.createMealPlanMap();
    this.mealPlanMap[mealPlanId].meals = this.mealPlanMap[mealPlanId].meals.filter(meal => meal.id !== mealId);
  }

  editMeal(mealPlanId: string, mealId: number, newValue: string): void {
    this.createMealPlanMap();
    this.mealPlanMap[mealPlanId].meals.find(meal => meal.id === mealId).name = newValue;
  }
}
