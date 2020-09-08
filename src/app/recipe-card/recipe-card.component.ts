import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from "../recipe.service"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() title: string;
  @Input() dishType: string;
  @Input() image: string;
  @Input() summary: string;
  @Input() id: string;
  @Output() favoritesChanged = new EventEmitter();
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
    this.recipeService.toggleFavorite(this.id);
    this.favoritesChanged.emit();
  }

  constructor(private recipeService: RecipeService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let favorites = this.recipeService.getFavoritesIds();
    this.inFavorites = favorites.indexOf(this.id) > -1;
  }

}
