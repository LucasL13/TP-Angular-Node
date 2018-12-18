export class Message {
    public id: string;
    public texte: string;
    public auteur: string;
    public date: Date;
    
    constructor(data?: any) {
        if (data) {
        this.id = data.id;
        this.texte = data.body;
        this.auteur = data.title;
        this.date = data.date ? data.date : new Date();
        }
    }
    
   }
   