import { Injectable } from '@angular/core';

import { Recipe } from './classes';
import { RecipesMap } from './types';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public recipes: Recipe[] = [];
  public recipesMap: RecipesMap = {};

  constructor() { }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipe(recipeId: number): Recipe {
    return this.recipesMap[recipeId];
  }

  public createRecipesMap(): void {
    this.recipes.forEach((recipe: Recipe) => this.recipesMap[recipe._id] = recipe);
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.createRecipesMap();
  }

  public deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter(recipe => recipe._id !== recipeId)
  }

}
