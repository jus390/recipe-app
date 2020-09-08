import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeFavouritesComponent } from './recipe-favourites/recipe-favourites.component';

const routes: Routes = [{ path: '', component: RecipeSearchComponent },
{ path: 'recipe/:id', component: RecipeComponent },
{ path: 'favorites', component: RecipeFavouritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
