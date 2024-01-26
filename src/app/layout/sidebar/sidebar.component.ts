import { Component } from '@angular/core';
import { ChatPreviewComponent } from "../../components/chat-component/chat-preview/chat-preview.component";
import { RouterOutlet } from '@angular/router';
import { ChatDataService } from '../../services/chat-data.service';
import { ChatInformation } from '../../interface/types';
import { UserDataService } from '../../services/user-data.service';
import { CampaignService } from '../../services/campaign.service';

@Component({
   selector: 'app-sidebar',
   standalone: true,
   templateUrl: './sidebar.component.html',
   styleUrl: './sidebar.component.scss',
   imports: [ChatPreviewComponent, RouterOutlet]
})
export class SidebarComponent {

   constructor(private chatDataService: ChatDataService, private userInfo: UserDataService, private campaignService:CampaignService) { }

   chatData: ChatInformation[] = this.chatDataService.getChatData()
   userCampaigns: any = 1;

      getChatStatus = async (param:string) => {
      const response = await this.campaignService.get(`status=${param}`)
      let chats = response.results
      // console.log(response.results)
      localStorage.setItem('chat-data', JSON.stringify(chats))
   }

   // getClosedChats = async(param:string) => {
   //    const response = await this.campaignService.get(`status=`)
   // }



}
