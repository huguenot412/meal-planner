import { Component, OnInit } from '@angular/core';

import { MealPlan } from './interfaces/index';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'mpl-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.scss']
})
export class MealPlansComponent implements OnInit {

  public mealPlanToggle: string = '';

  mealPlans: MealPlan[] = [
    {
      id: 1,
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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
      date: new Date(),
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

  ngOnInit() {
  }

  public toggleMealPlans(toggle: string) {
    this.mealPlanToggle = 'toggle';
  }

}
