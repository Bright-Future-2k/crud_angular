import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StaffModuleModule} from './staff-module/staff-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StaffModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
