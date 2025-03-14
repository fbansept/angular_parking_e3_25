import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {Page404Component} from './page404/page404.component';
import {ReservationPlaceComponent} from './reservation-place/reservation-place.component';
import {connecteGuard} from './connecte.guard';

export const routes: Routes = [
  {path : "accueil", component: AccueilComponent, canActivate: [connecteGuard]},
  {path : "connexion", component: ConnexionComponent},
  {path : "reservation-place/:id", component: ReservationPlaceComponent, canActivate: [connecteGuard]},
  {path : "", redirectTo: "accueil", pathMatch:"full"},
  {path : "**", component:Page404Component}
];
