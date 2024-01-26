import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {

  // trigger Modal 
  isProfileActive: boolean
  isSupervisorActive:boolean;

  isDarkMode:boolean;

  constructor(private router:Router, private alerts:AlertsService, private darkModeService:DarkModeService){}

  ngOnInit(): void {
    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode
    });
    
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode()
  }

  goToProfile() {
    this.isProfileActive = true;
    this.isProfileActive ? this.router.navigate(['/profile']) : ''
    
    this.isProfileActive = false;
  }

  userLogOut() {
    this.alerts.cautionAlert('Estas seguro que deseas cerrar sesión ?', () => {
      localStorage.clear();
      this.router.navigate(['/login']);
    })
  }

  goToSupervisor() {
    this.isSupervisorActive = true;
    this.isSupervisorActive ? this.router.navigate(['/supervisor']) : '';

    this.isSupervisorActive = false;
  }

  goToHome() {
    this.router.navigate(['/home'])
  }



}
