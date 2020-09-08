import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../recipe.service";
@Component({
  selector: 'app-recipe-favourites',
  templateUrl: './recipe-favourites.component.html',
  styleUrls: ['./recipe-favourites.component.scss']
})
export class RecipeFavouritesComponent implements OnInit {
  favoriteRecipes: object[];
  loading;

  removeRecipe(index) {
    this.favoriteRecipes.splice(index, 1);
  }

  fetchFavorites() {
    this.loading = true;
    this.recipeService.getFavorites().subscribe((data: object[]) => {
      this.favoriteRecipes = data;
      this.loading = false;
    });
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.fetchFavorites()
  }

}
