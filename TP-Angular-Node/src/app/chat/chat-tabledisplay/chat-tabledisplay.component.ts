import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat-tabledisplay',
  templateUrl: './chat-tabledisplay.component.html',
  styleUrls: ['./chat-tabledisplay.component.scss']
})
export class ChatTabledisplayComponent implements OnInit {
  
  @Input() public messages: Array<Message>;

  constructor() { }

  ngOnInit() {
  }

}
