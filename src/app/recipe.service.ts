import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  searchRecipe(search) {
    return this.http.get(`https://api.spoonacular.com/recipes/complexSearch`, { params: { query: search } });
  }

  getRecipe(recipeId: number) {
    return this.http.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false`);
  }

  getSimilarRecipes(recipeId: number) {
    return this.http.get(`https://api.spoonacular.com/recipes/${recipeId}/similar`, {
      params: {
        'number': "5",
      }
    });
  }

  getRandomRecipes(number) {
    return this.http.get(`https://api.spoonacular.com/recipes/random`, {
      params: {
        'number': number,
      }
    });
  }

  getFavorites() {
    let favorites: Array<string> = JSON.parse(localStorage.getItem("favorites"));
    return this.http.get(`https://api.spoonacular.com/recipes/informationBulk`, {
      params: {
        'ids': "" + favorites.reduce((acc, cur) => { return "" + acc + "," + cur })
      }
    });
  }

  getFavoritesIds(): string[] {
    return JSON.parse(localStorage.getItem("favorites"));
  }

  toggleFavorite(id: string) {
    let favorites: Array<string> = JSON.parse(localStorage.getItem("favorites"));
    if (favorites == null) {
      favorites = [];
    }
    let idx = favorites.indexOf(id);
    if (idx > -1) {
      favorites.splice(idx, 1);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }


  constructor(private http: HttpClient) { }
}
