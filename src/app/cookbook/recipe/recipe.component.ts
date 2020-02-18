import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../classes';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'mpl-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() public recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  deleteRecipe() {
    console.log(this.recipe);
    this.recipesService.deleteRecipe(this.recipe.id);
  }

}
