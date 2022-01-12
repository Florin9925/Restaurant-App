import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/services/menu-item';
import { MenuItemsService } from 'src/app/services/menu-items.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  appetizers: MenuItem[];
  entrees: MenuItem[];
  pizza: MenuItem[];
  pasta: MenuItem[];
  desserts: MenuItem[];
  
  constructor(private menuItems: MenuItemsService) {
    this.appetizers = [];
    this.entrees = [];
    this.pizza = [];
    this.pasta = [];
    this.desserts = [];
   }

  ngOnInit(): void {
    this.appetizers = this.menuItems.getAppetizers();
    this.entrees = this.menuItems.getEntrees();
    this.pizza = this.menuItems.getPizza();
    this.pasta = this.menuItems.getPasta();
    this.desserts = this.menuItems.getDesserts();
  }

}
