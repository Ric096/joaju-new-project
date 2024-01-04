import { Injectable } from '@angular/core';
import { environments } from '../../env/env.local';
import axios from 'axios';

const CHAT_URL = 'chat/Interaction';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService  {

  constructor() { 

  }

  getChatData() { 
    const chatData = JSON.parse(localStorage.getItem('chat-data'))
    console.log(chatData ?? 'ho hay datos') 
    return chatData ?? ''
  }




  getPersonalInfo() {
    let chatData = this.getChatData();
    if(chatData !== ''){
      const userInformation = chatData.map(chat => {
        return chat.channel;
        // chat.channel
      }) 
      return userInformation
    }
  }


  


}
