import { Component, inject,Input,OnInit } from '@angular/core';
import { ChatDataService } from '../../../services/chat-data.service';
import { Channel, ChatInformation } from '../../../interface/types';
import { DatePipe } from '@angular/common';
import { Message } from 'primeng/api';
import moment from 'moment';


@Component({
  selector: 'app-chat-preview',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './chat-preview.component.html',
  styleUrl: './chat-preview.component.scss'
})
export class ChatPreviewComponent implements OnInit {
[x: string]: any;

  @Input() activeMessages:boolean;
  @Input() closedMessages:boolean;
  @Input() pendingMessages:boolean;

  isDemored: boolean

  constructor(private chatDataServices:ChatDataService) { }
  
  channel:Channel = this.chatDataServices.getPersonalInfo()

  chatData:ChatInformation[] = this.chatDataServices.getChatData();

  chatsData = [this.chatData]

  allMessagesData:Message[] = this.chatDataServices.getMessages();

  queue = this.chatDataServices.getQueue()

  messages:any;

  arrayMessage:any

  messageList:any

  lastMessage:any

  ngOnInit(): void {
    this.isDemored = false;
    console.log('queues',this.queue)

    console.log('informacion total del chat',this.chatData)


    // console.log('this',this.chatData[1].messages)

    setTimeout(() => {
      this.isDemored = true
    }, 2000);

    // NUEVOS METODDOS

    const newArray = this.allMessagesData.map( (element,index) => {
      // console.log(element)
      // console.log('Estos son los elementos: ',element[index], 'estos son los indices: ',index)
      return element
    })
    const arrr2 = []
    // console.log(newArray)
    for(const messages of newArray) {
      arrr2.push(messages[1])
      // console.log(arrr2)
    }

    for (const message of arrr2 ){
      // console.log('Llegamos aqui o que ?',message)
    }

    // LUEGO DESCOMENTAR ESTO SI ES QUE SIRVE

    // this.messages = this.chatData.map(element => {
    //   return element.messages
    // })

    // console.log('Estos son los mensajes',this.messages)
    
    // this.message = this.messages.filter((message,index) => {
    //   let lastmessage: string;
    //   message[index] === (this.messages.length - 1) ? lastmessage = message[index].text : lastmessage = 'No hay mensajes';
    //   return lastmessage
    // })

    // this.arrayMessage = this.messages.map((message,index) => {
    //   return message[index]
      // let lastmessage: string;
      // message[index] === (this.messages.length - 1) ? lastmessage = message[index] : lastmessage = 'No hay mensajes';
      // return lastmessage
    // })

    // console.log('Este es el ultimo mensaje enviado por el cliente',this.arrayMessage)

    // this.messageList = this.arrayMessage.map((msg,index) => {
      // if(msg[index] === (this.arrayMessage.length - 1)){
        // console.log(msg.indexOf())
        // return msg[index].text
      // } else { return 'No hay mensaje..' }
      
    // })

    
    // console.log('Este es el ultimo mensaje enviado filtrado dinamicamente ',this.messageList[this.messageList.length - 1].text)
    // console.log('Este es el array de mensaje enviado filtrado dinamicamente ',this.messageList)

  } 
  
  today() {
    return moment().format('DD/MM/YYYY')
  }

}
