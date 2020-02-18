import { Component, OnInit } from '@angular/core';

import { RecipesService } from './services/recipes.service';
import { RecipesMap } from './types';
import { Recipe } from './classes';

@Component({
  selector: 'mpl-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {

  public recipes: any;
  public newRecipeName: string;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  addRecipe() {
    this.recipesService.addRecipe(new Recipe(this.newRecipeName));
  }
}
