import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public loginForm : FormGroup = new FormGroup({
    email : new FormControl(),
    password: new FormControl()
  })

  constructor(private _token:TokenService, private _router:Router){}

  submit(){
        console.log(this.loginForm.value)

        this._token.getToken(this.loginForm.value).subscribe(
          (data) => {
            sessionStorage.setItem('token', data.token)
            this._router.navigateByUrl('/dashboard')
          }
        )
  }


}
