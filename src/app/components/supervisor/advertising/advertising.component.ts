import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-advertising',
  standalone: true,
  imports: [],
  templateUrl: './advertising.component.html',
  styleUrl: './advertising.component.scss'
})
export class AdvertisingComponent implements OnInit {

ngOnInit(): void {
  console.log('ingreso al canal de publicidad')
}

}
