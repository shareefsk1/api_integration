import { Component } from '@angular/core';
import { SbibankService } from '../sbibank.service';
import { FormControl, FormGroup } from '@angular/forms' 

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

constructor(private _sbiservice:SbibankService){}

public accountForm :FormGroup = new FormGroup(
  {
    account_name : new FormControl(),
    available_balance : new FormControl(),
    currency : new FormControl(),
    user_image : new FormControl(),
    account_number : new FormControl()
  }
)


submit(){
  this._sbiservice.addingData(this.accountForm.value).subscribe(
    (data:any) => {
      alert('added successfully')
    },
    (err:any) => {
      alert('server error')
    }
  )
}

}
