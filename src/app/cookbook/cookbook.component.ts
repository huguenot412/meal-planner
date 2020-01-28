import { Component, OnInit } from '@angular/core';

import { RecipesService } from './recipes.service';
import { RecipesMap } from './types';
import { Recipe } from './classes';

@Component({
  selector: 'mpl-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {

  public recipes: Recipe[];
  public newRecipeName: string;

  constructor(private RecipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.RecipesService.getRecipes();
  }

  addRecipe() {
    this.RecipesService.addRecipe(new Recipe(this.newRecipeName));
  }

}
