import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { Login1Component } from './container/login1/login1.component';
import { Login2Component } from './container/login2/login2.component';
import { Login3Component } from './container/login3/login3.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextboxComponent,
    Login1Component,
    Login2Component,
    Login3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
