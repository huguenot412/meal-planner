import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Recipe } from '../classes';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;

  constructor(private readonly db: AngularFirestore) {
    this.recipesCollection = db.collection<Recipe>('recipes');
    this.recipes = this.recipesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Recipe;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public  getRecipes() {
    return this.recipes;
  }

  public addRecipe(recipe: Recipe) {
    this.recipesCollection.add({...recipe});
  }

  public deleteRecipe(recipeId: string) {
    this.recipesCollection.doc(recipeId).delete();
  }

}
