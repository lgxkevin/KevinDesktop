import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";

// Components
import { HomeComponent } from './home.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ClipboardListComponent } from './components/clipboard/clipboard-list/clipboard-list.component';

// Services
import { ClipboardService} from "../core/services/clipboard/clipboard.service";

// Keys
import {firebaseConfig} from '../../../keys/firebaseSetup';
@NgModule({
  declarations: [
    HomeComponent,
    ClipboardComponent,
    HomepageComponent,
    ClipboardListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers:[
    ClipboardService
  ]
})
export class HomeModule {}
