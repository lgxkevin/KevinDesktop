import { Component, OnInit } from '@angular/core';
import {clipboard, ipcRenderer, remote} from 'electron';
import {ClipboardService} from "../../../core/services/clipboard/clipboard.service";


@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {

  constructor(private clipboardService) {}

  ngOnInit(): void {
    const text = clipboard.readText();
    console.log(text);
  }

  showDialog(){
    remote.dialog.showOpenDialog({properties: ['openFile', 'multiSelections']});
  }
  showNotification(){
    let myNotification = new Notification('Title', {
      body: "Hello World!"
    })
    myNotification.onclick = () => {
      console.log('Notification clicked');
    }
  }
  IpcCommunicate(){
    ipcRenderer.on('other-custom-signal', (event, arg) => {
      console.log('Received acknowledged from backend about receipt of our signal.');
      console.log(event);
      console.log(arg);
    })

    console.log('Sending message to backend.');
    ipcRenderer.send('my-custom-signal', 'hello, are you there?');
  }
}
