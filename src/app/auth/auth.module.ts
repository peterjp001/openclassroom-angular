import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {RouterModule} from "@angular/router";
import {AuthRoutingModule} from "./auth-routing.module";
import {FaceSnapsModule} from "../face-snaps/face-snaps.module";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
