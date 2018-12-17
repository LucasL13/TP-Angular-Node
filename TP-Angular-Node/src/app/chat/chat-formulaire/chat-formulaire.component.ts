import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chat-formulaire',
  templateUrl: './chat-formulaire.component.html',
  styleUrls: ['./chat-formulaire.component.scss']
})
export class ChatFormulaireComponent implements OnInit {

  @Output() nouveauMessage: EventEmitter<Message>;
  @Output() displaymode: EventEmitter<number>;

  // Liste des valeurs possibles pour les modes d'affichage
  DispMode_LIST: number = 1;
  DispMode_TABLE: number = 2;
  DispMode_GRID: number = 3;
  // FLAG : indique le mode d'affichage actuel (parmis les options ci-dessus)
  displayMode: number;

  // Informations a double-binding (model/view + view/model) sur le nouveau message
  public texte: string;
  public username: string;

  // FLAG : presence du bandeau d'information d'envoi d'un nouveau message
  public displayAlert: boolean;
  public displayAlertTimeout: any;
  

  constructor() { 
    this.nouveauMessage = new EventEmitter<Message>();
    this.displaymode = new EventEmitter<number>();
    this.displayMode = this.DispMode_LIST;
    this.texte = '';
    this.username = "anonymous";
    this.displayAlert = false;
  }

  // Indique au parent le mode d'affichage choisi par défaut
  ngOnInit() {
    this.displaymode.emit(this.DispMode_LIST);
  }

  // Met a jour la valeur du mode d'affichage et informe le parent de la mise à jour
  public changeDisplayMode(newValue): void{
    this.displayMode = newValue;
    this.displaymode.emit(newValue);
  }

  // Prepare le nouveau message de l'utilisateur et informe le parent de la mise à jour
  public envoyer(): void {
    const message = new Message();
    message.auteur = this.username;
    message.date = new Date();
    message.texte = this.texte;
    this.nouveauMessage.emit(message);
    if(this.displayAlertTimeout != undefined) clearTimeout(this.displayAlertTimeout);
    this.displayAlert = true;
    this.displayAlertTimeout = setTimeout(()=>{this.displayAlert = false}, 3000);
  }

}
