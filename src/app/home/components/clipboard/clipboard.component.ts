import { Component, OnInit } from '@angular/core';
import {clipboard, ipcRenderer} from 'electron';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.css']
})
export class ClipboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const text = clipboard.readText();
    console.log(text);

    ipcRenderer.on('other-custom-signal', (event, arg) => {
      console.log('Received acknowledged from backend about receipt of our signal.');
      console.log(event);
      console.log(arg);
    })

    console.log('Sending message to backend.');
    ipcRenderer.send('my-custom-signal', 'hello, are you there?');
  }

}
