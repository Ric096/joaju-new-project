import { Injectable } from '@angular/core';
import axios from 'axios';
const URL = 'chat/Interaction/';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {

  constructor() { }

  get = async (id: number) => {
    const response = await axios.get(`${URL}${id}/`)
    return response.data;
    // return this.http.get(`${this.baseUrl}/${id}/`);
  }
  filter = async (url?: string) => {
    const response = await axios.get(`${URL}?${url}`);
    return response.data;
  }
  save = async (object: Object) => {
    const response = await axios.post(`${URL}`, object);
    return response.data;
    // return this.http.post(`${this.baseUrl}/`, object);
  }
  patch = async (object: any) => {
    const response = await axios.patch(`${URL}${object.id}/`, object)
    return response.data;
  }

}
