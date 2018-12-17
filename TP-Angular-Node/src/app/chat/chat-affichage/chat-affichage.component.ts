import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat-affichage',
  templateUrl: './chat-affichage.component.html',
  styleUrls: ['./chat-affichage.component.scss']
})

export class ChatAffichageComponent implements OnInit {

  @Input() messages: Array<Message>;
  @Input() displayMode: number;

  DispMode_LIST: number = 1;
  DispMode_TABLE: number = 2;
  DispMode_GRID: number = 3;

  constructor() { }

  ngOnInit() {
  }

}
