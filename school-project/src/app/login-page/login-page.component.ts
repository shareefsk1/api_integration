import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
    

    public loginForm:FormGroup = new FormGroup({
      email : new FormControl(),
      password: new FormControl()
    })

    constructor(private _loginService:LoginService, private _router:Router){}
    submit(){

      console.log(this.loginForm)

      this._loginService.login(this.loginForm.value).subscribe(
        (data:any) => {
          sessionStorage.setItem('token', data.token);
          this._router.navigateByUrl('/dashboard');
        },
        (err:any) => {
          alert('error') ;
        }
      )
    }

}
