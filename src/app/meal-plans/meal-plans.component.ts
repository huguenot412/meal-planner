import { ViewChildren, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { MealPlan } from './interfaces/index';
import { Meal } from './interfaces/index';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
// import { MealPlanComponent } from './meal-plan/meal-plan.component';


@Component({
  selector: 'mpl-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.scss']
})
export class MealPlansComponent implements OnInit {

  @ViewChildren(MealPlanComponent) mealPlansList: QueryList<MealPlanComponent>
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

  public toggleMealPlans(toggle: string): void {
    if(toggle === 'expandAll') {
      this.mealPlansList.forEach((mealPlan: MealPlanComponent) => mealPlan.isActive = true);
    } else if(toggle === 'collapseAll') {
      this.mealPlansList.forEach((mealPlan: MealPlanComponent) => mealPlan.isActive = false);
    }
  }

}
