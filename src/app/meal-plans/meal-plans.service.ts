import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { IMealPlan } from './interfaces';
import { MealPlan, Meal } from './classes';
import { MealPlanMap } from './types';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MealPlansService {

  mealPlans: MealPlan[] = [];

  // mealPlanMap: MealPlanMap = {}

  constructor() { }

  createMealPlanMap(): MealPlanMap {
    const mealPlanMap: MealPlanMap = {};
    this.mealPlans.forEach(mealPlan => mealPlanMap[mealPlan.id] = mealPlan);
    return mealPlanMap;
  }

  getMeals(): MealPlanMap {
    return this.createMealPlanMap();
  }

  addMeal(mealPlan: MealPlan, newMeal: string): void {
    const mealPlanMap: MealPlanMap = this.createMealPlanMap()
    if(mealPlanMap[mealPlan.id]) {
     mealPlanMap[mealPlan.id].meals.push(new Meal(newMeal));
    } else {
      this.mealPlans.push(new MealPlan(mealPlan.date, [new Meal(newMeal)]));
    }  
  }

  deleteMeal(mealPlanId: string, mealId: number): void {
    const mealPlanMap: MealPlanMap = this.createMealPlanMap();
    mealPlanMap[mealPlanId].meals = mealPlanMap[mealPlanId].meals.filter(meal => meal.id !== mealId);
  }

  editMeal(mealPlanId: string, mealId: number, newValue: string): void {
    const mealPlanMap: MealPlanMap = this.createMealPlanMap();
    mealPlanMap[mealPlanId].meals.find(meal => meal.id === mealId).name = newValue;
  }
}
