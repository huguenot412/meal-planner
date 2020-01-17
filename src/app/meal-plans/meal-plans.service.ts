import { Injectable } from '@angular/core';
import { MealPlan } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MealPlansService {

  mealPlans: MealPlan[] = [
    {
      id: 1,
      date: new Date(2020, 0, 17),
      name: 'Meal Plan 1',
      meals: [
        {
          name: 'Eggs'
        },
        {
          name: 'Sandwich'
        },
        {
          name: 'Spaghetti'
        }
      ]
    },
    {
      id: 2,
      date: new Date(2020, 0, 18),
      name: 'Meal Plan 2',
      meals: [
        {
          name: 'Cereal'
        },
        {
          name: 'Salad'
        },
        {
          name: 'Steak'
        }
      ]
    },
    {
      id: 3,
      date: new Date(2020, 0, 19),
      name: 'Meal Plan 3',
      meals: [
        {
          name: 'Cereal'
        },
        {
          name: 'Salad'
        },
        {
          name: 'Steak'
        }
      ]
    },
    {
      id: 4,
      date: new Date(2020, 0, 20),
      name: 'Meal Plan 4',
      meals: [
        {
          name: 'Cereal'
        },
        {
          name: 'Salad'
        },
        {
          name: 'Steak'
        }
      ]
    }
  ];

  constructor() { }

  getMeals() {
    return this.mealPlans;
  }
}
