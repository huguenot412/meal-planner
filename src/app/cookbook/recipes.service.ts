import { Injectable } from '@angular/core';

import { Recipe } from './classes';
import { RecipesMap } from './types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[];
  private recipesMap: RecipesMap;

  constructor() { }

  public getRecipes(): RecipesMap {
    return this.recipesMap;
  }

  private createRecipesMap(): void {
    this.recipes.forEach((recipe: Recipe) => this.recipesMap[recipe._id] = recipe);
  }

  private addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.createRecipesMap();
  }

  // private deleteRecipe(recipeId: number) {
  //   this.recipes.splice()
  // }

}
