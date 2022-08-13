import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YRrNzGqSouiDJMwVbODrHLpIFhxNc7P5DA&usqp=CAU"),
    new Recipe("Another Test Recipe", "This is simply another test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7oL0mafXxpwssXS5EW4uRSYOUbSiSNtTbw&usqp=CAU")
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
