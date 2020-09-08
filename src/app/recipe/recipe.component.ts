import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from "../recipe.service"

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe;
  similarRecipes;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.recipeService.getRecipe(+params.get('id')).subscribe((data) => {
        this.recipe = data
      })
      this.recipeService.getSimilarRecipes(+params.get('id')).subscribe((data) => {
        this.similarRecipes = data
      })
    });



  }

}
