import { Injectable } from '@angular/core';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  token:string;
  // Luego crear una interface para el objeto user...
  user:any

  constructor(private alerts:AlertsService) { }


  // Creamos una funcion para guardar el objeto de user.
  getUser() {
    this.user = JSON.parse(localStorage.getItem('user'));
  return this.user ?? ''
  }

  // Funcion que accede a los tokens.
  getTokens() {
    const user_data = this.getUser();
    // if(user_data !== '') {
      const access = user_data.access_token;
      const refresh = user_data.refresh_token;
      
      if(user_data === null || user_data === undefined)  {
        this.alerts.toastError('Los datos requeridos no existen')
      }
      
      return [access, refresh];
      

    // } else { 
    //   return ''
    }
    // }
    // return this.alerts.toastError('No se pudo acceder a la petición requerida')
    
  
  
  // Funcion que accede a la informacion del usuario.
  getUserData() {
    const user_data = this.getUser();
      const userData = user_data.userData
      console.log(userData);
      return userData
    // } else {
  }

  setUserId() {
    const user_data = this.getUserData()
  //   if(user_data !== ''){
      const user_id = user_data.id ?? '';
      console.log(user_data.id);
      localStorage.setItem('user_id', JSON.stringify(user_id));
  //   } else { 
  //     return 
  //   }
  }

}



