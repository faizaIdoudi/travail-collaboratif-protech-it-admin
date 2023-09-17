import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  messages: string[] = [];
  newMessage: string = '';

  constructor(private chatService: UserService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe((messages: any) => {
      this.messages = messages;
    });
  }
  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}
