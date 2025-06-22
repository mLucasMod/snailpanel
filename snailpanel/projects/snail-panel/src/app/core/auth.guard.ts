import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@snail/api';
import { map } from 'rxjs';

export const signedAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.refresh().pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      } else {
        return router.createUrlTree(['/signin']);
      }
    })
  );
};

export const notSignedAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.refresh().pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        return true;
      } else {
        return router.createUrlTree(['/']);
      }
    })
  );
};
