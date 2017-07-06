import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { LoginComponent } from './app.component';
import {EmployeeComponent} from './employee-app.component';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
