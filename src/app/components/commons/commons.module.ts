import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TextboxComponent } from '../textbox/textbox.component';



@NgModule({
  declarations: [
    ButtonComponent,
    TextboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    
  ]
})
export class CommonsModule { }
