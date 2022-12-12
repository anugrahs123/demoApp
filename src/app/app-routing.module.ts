import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login1Component } from './container/login1/login1.component';
import { Login2Component } from './container/login2/login2.component';
import { Login3Component } from './container/login3/login3.component';

const routes: Routes = [
  {path:"" ,redirectTo:"/login1",pathMatch:"full"},
  {path:"login1" ,component:Login1Component},
  {path:"login2" ,component:Login2Component},
  {path:"login3" ,component:Login3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
