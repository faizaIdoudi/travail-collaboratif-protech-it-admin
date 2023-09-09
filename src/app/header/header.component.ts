import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService) {}
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout() {
    this.authService.logout();

  }

}
