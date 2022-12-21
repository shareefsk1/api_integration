import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    constructor(private _token:TokenService, private _router:Router){}

    logout(){
      sessionStorage.removeItem('token');
      this._router.navigateByUrl('')
    }
}
