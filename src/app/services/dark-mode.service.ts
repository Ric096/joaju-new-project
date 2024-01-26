import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable()

  constructor() { }

  toggleDarkMode() {

    this.isDarkMode.next(!this.isDarkMode.value);
    document.body.classList.toggle('dark-mode');
  }
  
}
