import { Component, OnInit, Input } from '@angular/core';
import { MealPlan } from '../interfaces';

@Component({
  selector: 'mpl-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

  @Input() mealPlan: MealPlan;

  public isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
