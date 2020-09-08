import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecipeService } from "../recipe.service"

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe;
  similarRecipes;
  inFavorites: boolean;

  toggleFavorite(): void {

    if (this.inFavorites) {
      this._snackBar.open('Removed from favorites', "", {
        duration: 1000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
      });
    } else {
      this._snackBar.open('Added to favorites', "", {
        duration: 1000,
        horizontalPosition: "right",
        verticalPosition: "bottom"
      });
    }

    this.inFavorites = !this.inFavorites;
    this.recipeService.toggleFavorite(this.recipe.id);
  }

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.recipeService.getRecipe(+params.get('id')).subscribe((data) => {
        this.recipe = data
        let favorites = this.recipeService.getFavoritesIds();
        this.inFavorites = favorites.indexOf(this.recipe.id) > -1;
      })
      this.recipeService.getSimilarRecipes(+params.get('id')).subscribe((data) => {
        this.similarRecipes = data
      })
    });



  }

}
