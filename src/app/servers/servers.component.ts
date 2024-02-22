import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
allowNewServer=false;
serverCreationStatus = 'No server was created!';
serverName='';
constructor(){
}

onCreateServer(){
  this.serverCreationStatus = 'Server was created! ' + this.serverName;
}

// onUpdateServerName(event:Event){
// this.serverName = (<HTMLInputElement>event.target).value}
}
