import { Component, OnInit, inject } from '@angular/core';
import { WebsocketService } from '../../websocket/websocket.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button'
import moment from 'moment';
import {FormsModule} from '@angular/forms'
import axios from 'axios';
import { environments } from '../../../env/env.local';
import { ChatDataService } from '../../services/chat-data.service';

const CHAT_URL = 'chat/Interaction';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [InputTextModule,FormsModule,ButtonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  
  textInput?:any;

  
  messages:string[] = []
  
  constructor (private wss:WebsocketService, private chatData:ChatDataService) {
    
    let today = moment().format('DD/MM/YYYY HH:MM' );


    console.log('ingresamos al componente de chats', 'FECHA: ',today )
  }

  ngOnInit(): void {
    this.wss.createWebSocket();
    this.setChatData();
    this.chatData.getChatData();
  }

  sendMessage() {
    const message = this.textInput
    this.messages.push(message)
    this.textInput = ''
    this.wss.sendMessage(this.messages)
  }

  async setChatData() {
    const response = await axios.get(`${environments.api}/${CHAT_URL}/`);
    let results = response.data.results
    // console.log(results)
    localStorage.setItem('chat-data',JSON.stringify(results))
  }

}
