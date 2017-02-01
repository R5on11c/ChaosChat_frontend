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
      })
    }, 500);

  }
  sendText() {
    this.appRepo.sendMessage(this.message).subscribe();
    this.message="";
  }
}
