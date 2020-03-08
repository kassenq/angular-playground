import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // cache of messages

  add(message: string) {
    this.messages.push(message);
  } // add to cache

  clear() {
    this.messages = [];
  } // clear the cache
}
