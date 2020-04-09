import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  public get messages(): string[] {
    return this.messageService.getMessages();
  }
  public addMessage(message: string): void {
    this.messageService.add(message);
  }
  public clearMessages(): void {
    this.messageService.clear();
  }

}
