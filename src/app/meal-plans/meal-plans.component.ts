import { ViewChildren, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { MealPlan } from './interfaces/index';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { MealPlansService } from './meal-plans.service';



@Component({
  selector: 'mpl-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.scss']
})
export class MealPlansComponent implements OnInit {

  @ViewChildren(MealPlanComponent) mealPlansList: QueryList<MealPlanComponent>

  public mealPlans: MealPlan[] = [];

  constructor(public MealPlansService: MealPlansService) { }

  ngOnInit() {
    this.mealPlans = this.getMealPlans();
  }
  
  public getMealPlans(): MealPlan[] {
    return this.MealPlansService.getMeals();
  }

  public toggleMealPlans(toggle: boolean): void {
    this.mealPlansList.forEach((mealPlan: MealPlanComponent) => mealPlan.isActive = toggle);
  }

}
