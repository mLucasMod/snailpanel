import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@snail/api';

export const signedAuthGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (await authService.refresh()) {
    return true;
  } else {
    return router.createUrlTree(['/signin']);
  }
};

export const notSignedAuthGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (await authService.refresh()) {
    return router.createUrlTree(['/']);
  } else {
    return true;
  }
};
