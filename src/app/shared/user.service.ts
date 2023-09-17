import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }
  getMessages() {
    return this.db.list('messages').valueChanges();
  }
  sendMessage(message: string) {
    this.db.list('messages').push({
      text: message,
      timestamp: Date.now()
    });
  }


}
