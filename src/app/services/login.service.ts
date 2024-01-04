import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }



  async post(user) {
    const response = await axios.post('https://develop.api.joaju.app/api/v1.0/token/login/',user)
    return response.data
  }


}
