import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { NgbCarouselConfig, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    MenuPageComponent,
    ReservationPageComponent,
    LocationPageComponent,
    MenuItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
