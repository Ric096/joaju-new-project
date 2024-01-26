import { Injectable } from '@angular/core';
import axios from 'axios';
import { environments } from '../../env/env.local';

const BASE_URL = `${environments.api}/chat/Interaction`;

@Injectable({
   providedIn: 'root'
})
export class CampaignService {

   userId: string

   constructor() { }

   get = async (query:string) => {
      const response = await axios.get(`${BASE_URL}/?${query}`)
      return response.data;
   }

}
