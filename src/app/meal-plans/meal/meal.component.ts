import { Component, OnInit, Input } from '@angular/core';

import { Meal } from './../interfaces/meal';

@Component({
  selector: 'mpl-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  @Input() meal: Meal;

  constructor() { }

  ngOnInit() {
  }

}
