import { CanActivateFn,Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataService } from '../services/user-data.service';
import { AlertsService } from '../services/alerts.service';
import { inject } from '@angular/core';

// DESCOMENTAR LUEGO PARA LA AUTENTICACIÓN DINÁMICA CON EL REFRESH TOKEN 

export const logAuthGuard: CanActivateFn = (route, state) => {
  // const jwt = new JwtHelperService();
  const userDataService = inject(UserDataService);
  const router = inject(Router);
  const [ access , refresh ] = userDataService.getTokens()
  const alerts = inject(AlertsService)

  // const refreshExpired = jwt.isTokenExpired(refresh);

  // console.log(access)

  if(access || refresh){
    console.log('Adelante papu');
    // alerts.toastSuccess('Estas autorizado, no hace falta volver al login')
    return true
  } else {
    alerts.toastError('No tienes permisos, vuelve a iniciar sesion');
    router.navigate(['/login']);
    return false
  }
};
