# TP-Angular-Node

## Lucas LOIGNON

Webapp réalisé dans le cadre du TP Architecture des Applications.

`Live version` : http://164.132.51.109:8020/

`API Server live`  http://164.132.51.109:3000/

> L'application est mise à jour régulièrement et sujette a changements.`

## TODO

 - [x] [Front-end] Serveur Angular + Bootstrap
 - [X] [Back-end] Serveur API NodeJS

## Releases

|Version| Stack |Description |
|--|--|--|
| `v3.0`| *Angular & NodeJS API Server*. | Fonctionnalités ajoutées : Serveur API pour la gestion et stockage des messages (récupération, ajout, suppression), corrections.|
| `v2.0`| *Angular seulement.* | Fonctionnalités ajoutées : design, ajout d'un système de changement de mode d'affichage des messages, commentaires & corrections. |
| `v1.0`| *Angular seulement.* |Fonctionnalités initiales.|

## API Endpoints

|Path | Protocol | Input | Output |
|--|--|--|--|
|**/getMessages** | `GET`| --- | Messages[{message1},{message2} |  
|**/addMessage** | `POST` | {date: string, title: string, body: string} | Messages[{message1},{message2},..] |  
|**/removeMessage** | `POST` | {id: string} | Messages[{message1},{message2} | 



## Ressources 

Mock API Used : https://jsonplaceholder.typicode.com/posts
