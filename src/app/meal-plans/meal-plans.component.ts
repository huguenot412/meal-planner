import { Component, OnInit } from '@angular/core';

import { MealPlan } from './interfaces/index';
import { MealPlanComponent } from './meal-plan/meal-plan.component';

@Component({
  selector: 'meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.scss']
})
export class MealPlansComponent implements OnInit {

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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
