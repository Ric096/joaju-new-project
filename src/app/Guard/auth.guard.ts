import { CanActivateFn,Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDataService } from '../services/user-data.service';
import { inject } from '@angular/core';
import { AlertsService } from '../services/alerts.service';

export const authGuard: CanActivateFn = (route, state) => {

  const jwt = new JwtHelperService();
  const userDataService = inject(UserDataService);
  const router = inject(Router);
  const [access, refresh ]  = userDataService.getTokens();
  const alerts = inject(AlertsService);

  // const refreshExpired = jwt.isTokenExpired(refresh);
  let refreshExpired = jwt.isTokenExpired(refresh);



  // if(access){
  //   // router.navigate(['/login'])
  //   router.navigate(['/home'])
  //   return false 
  // } else {
  //   return true   
  // }

  if(refreshExpired){
    console.log('Expiro :',refreshExpired)
    return true 
  } else{
    console.log('Expiro :',refreshExpired)
    alerts.toastSuccess('Inicio de sesion exitoso');
    router.navigate(['/home']);
    return false
  }

};
