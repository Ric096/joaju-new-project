import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AlertsService } from '../../services/alerts.service';


@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './supervisor.component.html',
  styleUrl: './supervisor.component.scss'
})
export class SupervisorComponent {



  constructor(private router: Router, private alerts:AlertsService) { }

  document = inject(DOCUMENT)
  disabledButton:boolean;

  // Button disabled
  disableButton() {

    let actualRoute = document.location.pathname;

    // if( actualRoute === '/supervisor'){
    //   this.alerts.toastError('Botón deshabilitado')
    //   return true
    // } else {
    //   return false 
    // }
    // this.alerts.toastError('Botón deshabilitado');
    return actualRoute === '/supervisor'; 
  }

  goToSupervisor() {
    this.router.navigate(['/supervisor'])
  }


  // REDIRECCÓN A LAS URL
  goToHome() {
    this.router.navigate(['/home']);
  }

  goToStadistics() {
    this.router.navigate(['/supervisor/realtime-stadistics'])
  }

  goToInteractions() {
    this.router.navigate(['supervisor/interactions'])
  }

  goToCampaigns() {
    this.router.navigate(['/supervisor/campaigns'])
  }

  goToAdvertising() {
    this.router.navigate(['/supervisor/advertising'])
  }

  goToStickers() {
    this.router.navigate(['/supervisor/stickers'])
  }

  goToChatbot() {
    this.router.navigate(['/chatbot'])
  }

  goToCalendar() {
    this.router.navigate(['/supervisor/calendar'])
  }

  goToReplys() {
    this.router.navigate(['/supervisor/replys'])
  }

  goToClosuresMotive() {
    this.router.navigate(['/supervisor/closures-motives'])
  }

  goToEntryChannels() {
    this.router.navigate(['/supervisor/entry-channels'])
  }

  goToContacts() {
    this.router.navigate(['/supervisor/contacts'])

  }

  goToSettings() {
    this.router.navigate(['/supervisor/settings'])
  }

  goToReports() {
    this.router.navigate(['/supervisor/reports'])
  }

}
