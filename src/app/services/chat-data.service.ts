import { Injectable } from '@angular/core';
import { environments } from '../../env/env.local';
import axios from 'axios';

const CHAT_URL = 'chat/Interaction';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService  {

    // lUEGO CAMBIAR POR EL TYPE DE CHAT-DATA 
  chatData:any

  constructor() { 
    // this.getQueue(  )
    this.chatData = this.getChatData();
    
  }

  getChatData() { 
    const chatData = JSON.parse(localStorage.getItem('chat-data'))
    console.log(chatData ?? 'ho hay datos') 
    return chatData ?? ''
  }


  getPersonalInfo() {
    if(this.chatData !== ''){
      const userInformation = this.chatData.map(chat => {
        return chat.channel;
        // chat.channel
      }) 
      return userInformation
    }
  }

  getQueue() {
    if(this.chatData !== '') {
      const queueInformation = this.chatData.map( element => {
        return element.queue
      })
      // console.log(queueInformation)
      return queueInformation;
    }
  }

  getProviders() { 

    if(this.chatData !== '') {
      const providersInfo = this.chatData.map( element => {
        return element.provider
      })
      return providersInfo
    }
  }

  getMessages() {

    if(this.chatData !== '') {
      const allMessages = this.chatData.map( element => {
        return element.messages
      })
      return allMessages
    }


  }

  


  


}
