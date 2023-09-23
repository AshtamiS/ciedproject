import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users={
    1:{email:"aaa@gmail.com",password:111},
    2:{email:"bbb@gmail.com",password:111},
    3:{email:"ccc@gmail.com",password:111},


  }

}
