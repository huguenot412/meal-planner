import { Injectable, ModuleWithComponentFactories } from '@angular/core';
import { IMealPlan } from './interfaces';
import { MealPlan } from './classes';
import { MealPlanMap } from './types';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MealPlansService {

  mealPlans: MealPlan[] = [
    new MealPlan(moment(new Date(2020, 0, 21)), [{name: 'Eggs'}, {name: 'Sandwich'}, {name: 'Salad'}]),
    new MealPlan(moment(new Date(2020, 0, 24)), [{name: 'Cereal'}, {name: 'Soup'}, {name: 'Curry'}])
  ];

  constructor() { }

  getMeals(): MealPlanMap {
    const mealPlanMap: MealPlanMap = {};
    this.mealPlans.forEach(mealPlan => mealPlanMap[mealPlan.id] = mealPlan);
    return mealPlanMap;
  }

  addMeal(mealPlan: MealPlan, newMeal: string): void {
    const mealPlanMap: MealPlanMap = {};
    this.mealPlans.forEach(mealPlan => mealPlanMap[mealPlan.id] = mealPlan);
    if(mealPlanMap[mealPlan.id]) {
      mealPlanMap[mealPlan.id].meals.push({name: newMeal});
    } else {
      this.mealPlans.push(new MealPlan(mealPlan.date, [{name: newMeal}] ));
    }  
  }
}
