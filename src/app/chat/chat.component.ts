import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  searchControl = new FormControl();
  users$ = this.userService.getAllUsers$();
  constructor(private userService: UserService){}

}
