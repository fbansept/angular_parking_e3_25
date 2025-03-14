import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {ConnexionService} from './connexion.service';

export const connecteGuard: CanActivateFn = (route, state) => {

  const connexionService = inject(ConnexionService)

  if (connexionService.utilisateurConnecte.value != null) {
    return true;
  }

  const router = inject(Router);
  return router.parseUrl('/connexion')
};
