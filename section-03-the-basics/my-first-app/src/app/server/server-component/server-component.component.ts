import { Component } from '@angular/core';

@Component({
  selector: '[app-server-component]',
  templateUrl: './server-component.component.html',
  styleUrl: './server-component.component.css'
})
export class ServerComponentComponent {
  status: string = 'offline'
  serverID: number = 4200
  allowNewServer = false
  serverName: string = ''
  userName: string = ''
  inputText: string = ''


  handleClickEvent() {
    console.log('testing')
    this.userName = this.inputText
    this.inputText = ''
  }
  handleInputChange(event: Event) {
    console.log(this.serverName)
  }
}
