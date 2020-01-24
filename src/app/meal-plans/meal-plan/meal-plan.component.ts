import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MealPlan, Meal } from '../classes';
import { MealPlansService } from '../meal-plans.service';

@Component({
  selector: 'mpl-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {

  @Input() public mealPlan: MealPlan;
  @Output() public updated = new EventEmitter(); 

  public isActive: boolean = false;
  public newMeal: string = '';

  constructor(public MealPlanService: MealPlansService) { }

  ngOnInit() {
  }

  public addMeal(): void {
    if(this.newMeal === '') { return };
    this.MealPlanService.addMeal(this.mealPlan, this.newMeal);
    this.newMeal = '';
    this.updated.emit();
  }

  public trackByFn(index: number, item: Meal): number {
    return item.id;
  }

  public checkIfIsActive(id: string): void {
    this.mealPlan.id === id ? this.isActive = true : this.isActive = false;
  }

}
