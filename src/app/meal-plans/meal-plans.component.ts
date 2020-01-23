import { ViewChildren, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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
  public days: number = 1;
  public startDate: Date = new Date();
  public weekStartsOn: string = 'Sunday';
  public activeMealPlan: MealPlan;

  constructor(public MealPlansService: MealPlansService) { }

  ngOnInit() {
    this.MealPlansService.createMealPlanMap();
    this.updateMealPlans();
    this.activeMealPlan = this.mealPlans.find(mealPlan => mealPlan.id === moment(this.startDate).format('LL'));
  }
  
  public getMealPlans() {
    return this.MealPlansService.getMeals();
  }

  public toggleMealPlans(toggle: boolean): void {
    this.mealPlansList.forEach((mealPlan: MealPlanComponent) => mealPlan.isActive = toggle);
  }

  public updateMealPlans(): void {
    this.mealPlans = [];
    const mealPlanMap: MealPlanMap = this.MealPlansService.getMeals();
    for(let i = 0; i < this.days; i++) {
      const mealPlan: MealPlan = mealPlanMap[moment(this.startDate).add(i, 'd').format('LL')];
      if(mealPlan) {
        this.mealPlans.push(mealPlan);
      } else {
        // this.MealPlansService.addMealPlan(moment(this.startDate).add(i, 'd'), []);
        this.mealPlans.push(new MealPlan(moment(this.startDate).add(i, 'd')));
      }    
    }
    this.activeMealPlan = this.mealPlans[0];
  }

  public updateActiveMealPlan(mealPlan: MealPlan): void {
    this.activeMealPlan = mealPlan;
  }

  public changeStartDate(numberOfDays: number): void {
    if(numberOfDays === 0) {
      this.startDate = new Date();
    } else {
      const daysInMilliseconds: number = numberOfDays * 86400000;
      this.startDate.setMilliseconds(daysInMilliseconds);
    }
    this.updateMealPlans();
  }

  public changeStartDateWeek(week: number): void {
    this.days = 7;
    const startDay: number = this.weekStartsOn === 'Sunday' ? week : week + 1;
    const currentDayOfWeek = new Date().getDay();
    const daysInMilliseconds: number = (currentDayOfWeek * -1 + startDay) * 86400000;
    this.startDate = new Date();
    this.startDate.setMilliseconds(daysInMilliseconds);
    this.updateMealPlans();
  }

  public trackByFn(index: number, item: MealPlan): string {
    return item.id;
  }

}
