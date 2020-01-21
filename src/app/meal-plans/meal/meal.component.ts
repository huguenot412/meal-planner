import { Component, OnInit, Input } from '@angular/core';

import { Meal } from './../interfaces/meal';
import { MealPlansService } from '../meal-plans.service';

@Component({
  selector: 'mpl-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  @Input() meal: Meal;
  @Input() mealId: string;

  private editing: boolean = false;
  public editedMeal: string = ''

  constructor(public MealPlanService: MealPlansService) { }

  ngOnInit() {
  }

  private editMeal(): void {
    if(this.editing) {
      this.MealPlanService.editMeal(this.mealId, this.meal.id, this.editedMeal);
    }
    this.editing = !this.editing;
  }

  private deleteMeal(): void {
    this.MealPlanService.deleteMeal(this.mealId, this.meal.id);
  }

}
