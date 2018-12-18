import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from "../models/message";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  

  messages: Array<Message>;

  constructor(private http: HttpClient) { 
    this.messages = new Array<Message>();
  }

  public buildMessages(resultats: Array<any>): Array<Message> {
    const messages = [];
    if (resultats != null) {
      for (const result of resultats) {
          console.log("Date : " + result.date);
          const message = new Message(result);
        messages.push(message);
      }
    }
    return messages;
  }

  public getMessages(): Observable<Array<Message>> {
    return new Observable<Array<Message>>((observer) => {
      this.http.get<Array<any>>('http://localhost:3000/getMessages')
      .subscribe(
        (messages) => {
        this.messages = this.buildMessages(messages);
        observer.next(this.messages);
        },
        (error) => observer.error(error),
        () => observer.complete()
      );
    });
  }

    public addMessage(message: Message): Observable<Array<Message>> {
      return new Observable<Array<Message>>((observer) => {
          this.http.post<Array<any>>('http://localhost:3000/addMessage',
          {title: message.auteur, body: message.texte, date: message.date}).subscribe(
            (messages) => {
            this.messages = this.buildMessages(messages);
            observer.next(this.messages);
            },
            (error) => observer.error(error),
            () => observer.complete()
          );
      });
    }

    public removeMessage(id:string): Observable<Array<Message>> {
      return new Observable<Array<Message>>((observer) => {
        this.http.post<Array<any>>('http://localhost:3000/removeMessage',
       {id: id}).subscribe(
          (messages) => {
          this.messages = this.buildMessages(messages);
          observer.next(this.messages);
          },
          (error) => observer.error(error),
          () => observer.complete()
        );
      });
    }
     
   

}
