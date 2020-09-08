import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
interface SearchResult {
  results: object[];
}
@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {
  control = new FormControl();
  options = [];
  randomRecipes = []
  writeTimer;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRandomRecipes(9).subscribe((data: object) => {
      this.randomRecipes = data.recipes;
    });
  }

  checkFavourites(id) {
    let favorites = this.recipeService.getFavoritesIds();
    return favorites.indexOf(id) > -1;
  }
  searchRecipes(search) {
    clearTimeout(this.writeTimer);
    this.writeTimer = setTimeout(() => {
      this.recipeService.searchRecipe(search).subscribe((data: SearchResult) => {
        this.options = data.results;
      }
      )
    }, 1000);


  }

}
