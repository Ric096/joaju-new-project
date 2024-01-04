import { Component } from '@angular/core';
import { ChatPreviewComponent } from "../../components/chat-component/chat-preview/chat-preview.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [ChatPreviewComponent,RouterOutlet]
})
export class SidebarComponent {

}
