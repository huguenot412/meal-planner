import { ViewChildren, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { IMealPlan } from './interfaces/index';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { MealPlansService } from './meal-plans.service';
import * as moment from 'moment';
import { MealPlan } from './classes';
import { MealPlanMap } from './types';



@Component({
  selector: 'mpl-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.scss']
})
export class MealPlansComponent implements OnInit {

  @ViewChildren(MealPlanComponent) mealPlansList: QueryList<MealPlanComponent>

  public mealPlans: MealPlan[] = [];
  public days: number = 7;
  public startDate: Date = new Date(2020, 0, 20);

  constructor(public MealPlansService: MealPlansService) { }

  ngOnInit() {
    this.updateMealPlans(this.days);
  }
  
  public getMealPlans() {
    return this.MealPlansService.getMeals();
  }

  public toggleMealPlans(toggle: boolean): void {
    this.mealPlansList.forEach((mealPlan: MealPlanComponent) => mealPlan.isActive = toggle);
  }

  public updateMealPlans(days: number): void {
    this.mealPlans = [];   
    const mealPlanMap: MealPlanMap = this.MealPlansService.getMeals();
    for(let i = 0; i < days; i++) {
      if(mealPlanMap[moment(this.startDate).add(i, 'd').format('LL')]) {
        this.mealPlans.push(mealPlanMap[moment(this.startDate).add(i, 'd').format('LL')]);
        console.log('Meal plan found');
      } else {
        this.mealPlans.push(new MealPlan(moment(this.startDate).add(i, 'd')));
      }    
    }
  }

}
