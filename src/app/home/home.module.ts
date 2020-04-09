import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { HomeComponent } from './home.component';
import { ClipboardComponent } from './components/clipboard/clipboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    HomeComponent,
    ClipboardComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
