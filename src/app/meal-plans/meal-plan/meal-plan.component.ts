import { Component, OnInit, Input } from '@angular/core';
import { MealPlan } from '../interfaces';

import { MealComponent } from '../meal/meal.component';

@Component({
  selector: 'mpl-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

  @Input() mealPlan: MealPlan;
  @Input() mealPlanToggle: string;

  public isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
