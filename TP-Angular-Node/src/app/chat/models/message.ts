// export class Message {
//     public userId: number;
//     public id: number;
//     public title: string;
//     public body: string;

//     constructor(data?: any) {
//         if (data) {
//             this.userId = data.userId;
//             this.id = data.id;
//             this.title = data.title;
//             this.body = data.body;
//         }
//     }
// }

export class Message {
    public texte: string;
    public auteur: string;
    public date: Date;
    
    constructor(data?: any) {
        if (data) {
        this.texte = data.body;
        this.auteur = data.title;
        this.date = data.date ? data.date : new Date();
        this.date = data.date;
        }
    }
    
   }
   