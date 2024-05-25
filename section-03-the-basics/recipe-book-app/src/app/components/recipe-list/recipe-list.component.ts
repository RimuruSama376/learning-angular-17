import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Tikka',
      'Chicken tikka is a chicken dish popularised in the Indian subcontinent popular in India.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI7ettgygGiqTbARoUEhPWC8sPWytWnIx7lQS9r1eA&s'
    ),
    new Recipe(
      'Beef Stroganoff',
      'Beef Stroganoff is a Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI7ettgygGiqTbARoUEhPWC8sPWytWnIx7lQS9r1eA&s'
    ),
    new Recipe(
      'Vegetable Curry',
      'Vegetable curry is a hearty and healthy dish made with a variety of vegetables simmered in a flavorful curry sauce.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI7ettgygGiqTbARoUEhPWC8sPWytWnIx7lQS9r1eA&s'
    ),
    new Recipe(
      'Spaghetti Carbonara',
      'Spaghetti Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, pancetta, and pepper.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI7ettgygGiqTbARoUEhPWC8sPWytWnIx7lQS9r1eA&s'
    ),
    new Recipe(
      'Fish Tacos',
      'Fish tacos are a traditional Mexican dish made with grilled or fried fish, fresh vegetables, and a tangy sauce, all wrapped in a soft tortilla.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VI7ettgygGiqTbARoUEhPWC8sPWytWnIx7lQS9r1eA&s'
    )
  ];
  
}
