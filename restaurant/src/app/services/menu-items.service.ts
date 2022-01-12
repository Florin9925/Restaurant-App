import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  entrees: Array<MenuItem> = [
    {
      name: "Chicken strips",
      price: "6.75",
      description: "all-white chicken breast with ranch or honey mustard"
    },
    {
      name: "Grilled liver & onions",
      price: "7.25",
      description: "bacon, served with steamed fresh vegetables"
    },
    {
      name: "Homemade meatloaf",
      price: "7.50",
      description: "topped with mushrooms and onions, served with steamed fresh vegetables"
    },
    {
      name: "1/2 Fried chicken",
      price: "7.50",
      description: "four pieces pieced cajun-style"
    },
    {
      name: "Turkey pot pie",
      price: "9.50",
      description: "made with all breast meat, carrots, potatoes, peas, and green beans in a flacky crust"
    },
    {
      name: "Fish and chips",
      price: "8.75",
      description: "alaskan halibut battered and fried, with homemade tartar sauce"
    },
    {
      name: "Grilled salmon",
      price: "10.50",
      description: "wild alaska salmon with honey mustard sauce"
    },
    {
      name: "Pork chops",
      price: "8.75",
      description: "broiled in honey dijon sauce, served with herbed mashed potatoes"
    },
    {
      name: "Pepper steak",
      price: "9.25",
      description: "grilled strip steak encrusted with pepper and wine sauce, served on mashed potatoes"
    },
    
    
  ];
  appetizers: Array<MenuItem> = [
    {
      name: "Supreme nachos",
      price: "8.00",
      description: "chicken, cheese, jalapenos, olives, tomatoes, salsa and sour cream"
 
    },
    {
      name: "Cheese Quesadilla",
      price: "6.50",
      description: "flour tortillas with three types of cheese, guacamole, salsa and sour cream"
    },
    {
      name: "Potato skins",
      price: "7.50",
      description: "with melty mozzarella, chedar and bacon"
    },
    {
      name: "Chicken fingers",
      price: "7.50",
      description: "beer battered chicken with honey dijon or ranch dipping sauce"
    },
    {
      name: "Mozzarella sticks",
      price: "6.25",
      description: "beer battered with mozzarella cheese with marinara sauce"
    },
    {
      name: "Sweet potato fries",
      price: "5.75",
      description: "hand out fries with honey dijon dipping sauce"
    },
    {
      name: "Chicken wings",
      price: "8.00",
      description: "choose mild, hot, barbecue or teriyaki"
    },
    {
      name: "Stuffed breadsticks",
      price: "6.50",
      description: "choose plain cheese or pepperoni"
    },
    {
      name: "Chef salad",
      price: "7.00",
      description: "romaine, smoked turkey, honey ham, tomato, egg and cucumber"
    },
    {
      name: "Grilled chicken caesar salad",
      price: "9.50",
      description: "romaine, parmesan and garlic croutons"
    },
    {
      name: "Classic burger",
      price: "6.50",
      description: "customize by adding your favourite toppings"
    },
    {
      name: "BBQ beef brisket burger",
      price: "10.00",
      description: "burger topped with our own in-house smocked beef brisket anf bbq sauce"
    }
  ];
  pizza: Array<MenuItem> = [
    {
      name: "Four cheese pizza",
      price: "11.75",
      description: "romano, provolone, mozzarella and ricotta cheeses"
 
    },
    {
      name: "Pepperoni pizza",
      price: "11.50",
      description: "marinara, pepperoni and mozzarella"
    },
    {
      name: "Quatro stagioni",
      price: "10.00",
      description: "tomato sauce, mozzarella, mushrooms, ham, olives and oregano"
    },
    {
      name: "Diavola",
      price: "9.00",
      description: "tomato sauce, mozzarella, spicy salami and chilli pepper"
    },
    {
      name: "Hawaiian pizza",
      price: "13.50",
      description: "diced ham, fresh pineapple and mozzarella"
    },
    {
      name: "Vegie pizza",
      price: "12.25",
      description: "onions, bell peppers, mushrooms and olives with pesto or marinara"
    },
    {
      name: "California Club",
      price: "13.00",
      description: "applewood smocked bacon & grilled chicken"
    },
    {
      name: "Greek pizza",
      price: "13.50",
      description: "mediterranean spiced grilled chicken & mozzarella"
    },
    {
      name: "The works",
      price: "15.00",
      description: "canadian bacon, salami, pepperoni, sausage, beef, olives, pineapple, mushrooms, onions, green peppers"
    },
   
  ];
  pasta: Array<MenuItem> = [
  
    {
      name: "Spaghetti",
      price: "8.50",
      description: "with meaty tomato bolognese sauce"
    },
    {
      name: "Chili mac",
      price: "8.00",
      description: "hot beef chili over spaghetti, topped with parmesan"
    },
    {
      name: "Cheese ravioli",
      price: "7.75",
      description: "in tomato basil marinara souce"
    },
    {
      name: "Grilled chicken pasta",
      price: "9.00",
      description: "chicken breast in tomato basil marinara tossed with linguine"
    },
    {
      name: "Shrimp fettucini alfredo",
      price: "9.50",
      description: "butterfly shrimp in Alfredo sauce, topped with parmesan"
    },
    {
      name: "Linguine vegetariani",
      price: "12.00",
      description: "sauteed in butter with mushrooms, zuchini and red pepper"
    }
  ];
  desserts: Array<MenuItem> = [
  
    {
      name: "Lemon tart",
      price: "9.50",
      description: "served with passion fruit coulis and cream"
    },
    {
      name: "Creme brulee",
      price: "11.00",
      description: "madagascar vanilla bean creamy custard torched with Raw sugar to a golden caramel"
    },
    {
      name: "Vanilla panna cotta",
      price: "9.00",
      description: "with plum jelly and an almond toffee garnish"
    },
    {
      name: "Caramen banana pizza",
      price: "10.00",
      description: "served with vanilla ice cream, fresh cream & caramel sauce"
    },
    {
      name: "Sticky date pudding",
      price: "9.50",
      description: "with toffee sauce and fig honey ice cream"
    },
    {
      name: "White chocolate cheesecake",
      price: "8.00",
      description: "italian style, rich white chocolate, espresso creme angalis, whipped cream"
    },
    {
      name: "Ibarra chocolate cake",
      price: "8.00",
      description: "mexican chocolate with creamy caramel, premium vanilla gelato, a drizzle of chocolate and whipped cream"
    }
  ];

  constructor() { }
  getAppetizers(): Array<MenuItem>{
    return this.appetizers;
  }
  getEntrees(): Array<MenuItem>{
    return this.entrees;
  }
  getPizza(): Array<MenuItem>{
    return this.pizza;
  }
  getPasta(): Array<MenuItem>{
    return this.pasta;
  }
  getDesserts(): Array<MenuItem>{
    return this.desserts;
  }
}
