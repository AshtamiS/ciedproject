import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

email(event:any){
  console.log(event.target.value);
  
}
password(event:any){
  console.log(event.target.value);

}

constructor(private router:Router){}
login(){
  this.router.navigateByUrl('login')

}
}
