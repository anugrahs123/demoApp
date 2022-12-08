import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../components/commons/commons.module';



@NgModule({
  declarations: [
    CommonsModule
  ],
  imports: [
    CommonModule,
    CommonsModule
    
  ],
  exports:[
    CommonsModule
  ]
})
export class ReuseModule { }
