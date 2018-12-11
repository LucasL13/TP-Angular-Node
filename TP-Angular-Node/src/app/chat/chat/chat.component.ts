import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages: Array<Message>;

  constructor(private http: HttpClient) { 
    this.messages = new Array<Message>();
  }

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (results) => {
          if (results != null) {
            for (const result of results) {
              result.date = new Date();
              const message = new Message(result);
              this.messages.push(message);
            }
          console.log(this.messages);
        }
    }) ;
    const arr = new Array<Message>();
    arr.push(...this.messages);
    this.messages = arr;
  }

}
