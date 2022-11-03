import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {httpInterceptorprovider} from "./interceptor";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    httpInterceptorprovider
  ],
})
export class CoreModule { }
