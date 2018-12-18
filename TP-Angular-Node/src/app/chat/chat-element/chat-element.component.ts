import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { ChatService } from '../services/chat.service';
import { ChatComponent } from '../chat/chat.component';


@Component({
  selector: 'app-chat-element',
  templateUrl: './chat-element.component.html',
  styleUrls: ['./chat-element.component.scss']
})
export class ChatElementComponent implements OnInit {

  @Input() public message: Message;

  constructor(private chatService: ChatService, private chatComponent: ChatComponent) { }

  ngOnInit() {
    
  }

  removeMsg(id:string){
    this.chatComponent.messages = this.chatService.removeMessage(id);
  }

}
