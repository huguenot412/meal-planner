import { Component, OnInit, Input } from '@angular/core';
import { IMealPlan } from '../interfaces';

@Component({
  selector: 'mpl-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

  @Input() mealPlan: IMealPlan;

  public isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
