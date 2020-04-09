import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  private messages: string[] = [];

  public getMessages(): string[] {
    return this.messages;
  }

  public add(message: string): void {
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = [];
  }
}
