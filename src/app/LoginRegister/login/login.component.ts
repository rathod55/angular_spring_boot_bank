import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    id !: number;
    pass !: string;

    login(): void
    {
      alert("Login Sucessfull");
      console.log("Login Username is " + this.id + "password is " + this.pass)
    }
}
