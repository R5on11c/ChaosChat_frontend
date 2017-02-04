import { Component } from '@angular/core';
import { AppRepository } from './app.repository'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private message: string;
  private messages: Array<string> = [];
  constructor(private appRepo: AppRepository) {
    setInterval(()=>{
      this.appRepo.getMessages().subscribe((response)=>{
        this.messages = response;
        setTimeout(()=>{
          document.getElementById('scrollcontainer').scrollTop += document.getElementById('scrollcontainer').scrollHeight;
        }, 0);
      });
    }, 500);

  }
  clearChat() {
    this.appRepo.clearChat().subscribe();
    document.getElementById('chatinput').focus();
  }
  sendText() {
    this.appRepo.sendMessage(this.message).subscribe();
    this.message="";
  }
}
