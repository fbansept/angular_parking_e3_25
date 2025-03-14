import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  http= inject(HttpClient)
  router= inject(Router)

  listePlace: Place[] = []

  ngOnInit() {
    this.http.get<Place[]>("http://localhost:8080/places")
      .subscribe(listePlace => this.listePlace = listePlace)

  }

  onClickPlace(place: Place) {
    this.router.navigateByUrl("/reservation-place/" + place.id )
  }
}
