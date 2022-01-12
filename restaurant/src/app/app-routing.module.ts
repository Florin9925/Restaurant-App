import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  {path: "home", component: HomePageComponent},
  {path: "location", component: LocationPageComponent},
  { path: "menu", component: MenuPageComponent },
  {path: "reservation", component: ReservationPageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = 
  [
    HomePageComponent,
    AboutPageComponent,
    LocationPageComponent,
    MenuPageComponent,
    ReservationPageComponent
   
  ]