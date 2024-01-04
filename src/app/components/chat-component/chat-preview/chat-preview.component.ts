import { Component, inject,OnInit } from '@angular/core';
import { ChatDataService } from '../../../services/chat-data.service';


@Component({
  selector: 'app-chat-preview',
  standalone: true,
  imports: [],
  templateUrl: './chat-preview.component.html',
  styleUrl: './chat-preview.component.scss'
})
export class ChatPreviewComponent implements OnInit {

  isDemored: boolean

  constructor(private chatDataServices:ChatDataService) { }
  
  channel = this.chatDataServices.getPersonalInfo()


  

  ngOnInit(): void {
    console.log('canal inyectado correctamente:', this.channel);
    this.isDemored = false;

    // setTimeout(() => {
    //   this.isDemored = true
    // }, 6000);
  } 



}
