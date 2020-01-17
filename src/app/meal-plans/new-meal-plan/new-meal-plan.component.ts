import { Component, OnInit } from '@angular/core';
import { MealPlansService } from '../meal-plans.service';

@Component({
  selector: 'mpl-new-meal-plan',
  templateUrl: './new-meal-plan.component.html',
  styleUrls: ['./new-meal-plan.component.scss']
})
export class NewMealPlanComponent implements OnInit {

  constructor(public MealPlansService: MealPlansService) { }

  ngOnInit() {
  }

}
