import { Component, OnInit } from '@angular/core';
import {clipboard} from 'electron';


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

  }

}
