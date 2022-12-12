import { Component } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {

  data={
    a:'Login with Facebook',
    b:'Login with Google',
    c:'Login with Email'


  }  
  facebook='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png'
  google='https://blog.hubspot.com/hubfs/image8-2.jpg'  
  mail="https://static.vecteezy.com/system/resources/previews/000/547/340/original/envelope-mail-icon-vector-illustration.jpg"
}
