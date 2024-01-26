import { Component, AfterContentInit } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterContentInit {

  constructor(private router:Router, private alerts:AlertsService, private userDataService:UserDataService){}

  ngAfterContentInit(): void {
    this.userDataService.setUserId();
  }
logout(){
  // this.alerts.cautionAlert('Estas seguro que deseas cerrar sesión?',this.confirmLogOut)
  this.confirmLogOut()
  // localStorage.clear()
  // this.router.navigate(['/login'])
}

confirmLogOut() {
  localStorage.clear()
  this.router.navigate(['login'])
}


}
