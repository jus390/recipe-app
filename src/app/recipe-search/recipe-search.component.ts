import { Component, OnInit } from '@angular/core';
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  testApi() {
    this.recipeService.getRecipe(100);
  }

  ngOnInit(): void {
  }

}
