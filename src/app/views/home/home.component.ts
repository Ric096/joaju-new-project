import { Component } from '@angular/core';
import { Router,RouterOutlet } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router:Router, private alerts:AlertsService){}

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
