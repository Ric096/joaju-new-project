import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { logAuthGuard } from './Guard/log-auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard } from './Guard/auth.guard';
import { ProfileComponent } from './views/profile/profile.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { AdvertisingComponent } from './components/supervisor/advertising/advertising.component';
import { CalendarComponent } from './components/supervisor/calendar/calendar.component';
import { CampaignsComponent } from './components/supervisor/campaigns/campaigns.component';
import { ChatbotComponent } from './components/supervisor/chatbot/chatbot.component';
import { ContactsComponent } from './components/supervisor/contacts/contacts.component';
import { EntryChannelsComponent } from './components/supervisor/entry-channels/entry-channels.component';
import { InteractionsComponent } from './components/supervisor/interactions/interactions.component';
import { RealtimeStadisticsComponent } from './components/supervisor/realtime-stadistics/realtime-stadistics.component';
import { ReplysComponent } from './components/supervisor/replys/replys.component';
import { ReportsComponent } from './components/supervisor/reports/reports.component';
import { SettingsComponent } from './components/supervisor/settings/settings.component';
import { StickersComponent } from './components/supervisor/stickers/stickers.component';
import { ListOfBotsComponent } from './components/supervisor/chatbot/list-of-bots/list-of-bots.component';
import { ClosuresMotivesComponent } from './components/supervisor/closures-motives/closures-motives.component';
import { Component } from '@angular/core';
import { ChatComponent } from './views/chat/chat.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent,
        canActivate:[authGuard]
    },
    {
        path:'',
        component:MainLayoutComponent,
        canActivate:[logAuthGuard],
        children:[
            
            {path:'',component:HomeComponent},
            {path:'home',component:HomeComponent,children: [
               { path:'chat', component: ChatComponent}
            ]}, 
            
            
        ]
    },
    {
        path: 'supervisor',
        component: SupervisorComponent,
        children:[
            {path: 'advertising' , component: AdvertisingComponent},
            {path: 'campaigns' , component: CampaignsComponent},
            {path: 'calendar' , component: CalendarComponent},
            {
                path: 'chatbot' , 
                component: ChatbotComponent, 
                children:[
                {path: 'list-of-bots', component:ListOfBotsComponent},
                ]
            },
            {path: 'entry-channels' , component: EntryChannelsComponent},
            {path: 'interactions', component: InteractionsComponent},
            {path: 'realtime-stadistics' , component: RealtimeStadisticsComponent },
            {path: 'replys' , component: ReplysComponent},
            {path:'reports', component: ReportsComponent},
            {path: 'settings' , component: SettingsComponent},
            {path: 'stickers' , component: StickersComponent},
            {path: 'contacts' , component: ContactsComponent},
            {path:'closures-motives' , component: ClosuresMotivesComponent}
           
        ]
            
    },
    {
        path:'profile',
        component:ProfileComponent,
        children: [

        ]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },

];
