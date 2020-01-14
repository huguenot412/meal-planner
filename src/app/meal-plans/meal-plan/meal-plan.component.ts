import { Component, OnInit, Input } from '@angular/core';
import { MealPlan } from '../interfaces';

@Component({
  selector: 'meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

  @Input() mealPlan: MealPlan;

  constructor() { }

  ngOnInit() {
  }

}
