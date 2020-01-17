import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealPlansComponent } from './meal-plans/meal-plans.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  { path: 'meal-plans', component: MealPlansComponent },
  { path: 'cookbook', component: CookbookComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '', redirectTo: '/meal-plans', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
