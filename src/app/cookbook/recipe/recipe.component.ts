import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../classes';

@Component({
  selector: 'mpl-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() public recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
