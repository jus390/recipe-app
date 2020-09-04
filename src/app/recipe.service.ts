import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  searchRecipe(search) {
    return {}
  }

  getRecipe(recipeId: number): object {
    return this.http.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false`).subscribe();
  }

  constructor(private http: HttpClient) { }
}
