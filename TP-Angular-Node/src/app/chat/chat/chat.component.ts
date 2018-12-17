import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { Observable } from 'rxjs'
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public messages: Observable<Array<Message>>;
  public displayMode: number;

  constructor(private chatService: ChatService) { 
  }

  ngOnInit() {
    this.messages = this.chatService.getMessages();    
  }

  // Receptionner et transmettre au service concerné un message ajouté par l'utilisateur
  public gererNouveauMessage(message: Message): void {
    this.messages = this.chatService.addMessage(message);
  }

  // Changer le mode d'affichage des messages. 
  // Voir chat-formulaire pour le changement d'entrée
  // Voir chat-affichage pour les recupercusions HTML
  public gererDisplayMode(dpMode: number): void{
    this.displayMode = dpMode;
  }
   

}
