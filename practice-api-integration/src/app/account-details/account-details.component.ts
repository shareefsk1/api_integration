import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  public account : any = {}

    constructor(private _bankService:SbibankService, private _activeRoute:ActivatedRoute) {
        _activeRoute.params.subscribe(
          (data:any) => {
            _bankService.singelAccount(data.id).subscribe(
              (data2:any) => {
                this.account = data2 ;
              }
            )
          }
        )
    }
}
