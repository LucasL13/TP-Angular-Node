import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { ChatAffichageComponent } from './chat-affichage/chat-affichage.component';
import { ChatElementComponent } from './chat-element/chat-element.component';
import { ChatFormulaireComponent } from './chat-formulaire/chat-formulaire.component';
import { ChatTabledisplayComponent } from './chat-tabledisplay/chat-tabledisplay.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [
        ChatComponent,
        ChatAffichageComponent,
        ChatElementComponent,
        ChatFormulaireComponent,
        ChatTabledisplayComponent,
    ],
    exports: [
        ChatComponent
    ]
})

export class ChatModule { }
