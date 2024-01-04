import { Component } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-main-layout',
    standalone: true,
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    imports: [NavigationComponent, SidebarComponent, RouterOutlet, FooterComponent]
})
export class MainLayoutComponent {

}
