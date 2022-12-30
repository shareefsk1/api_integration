import { Component } from '@angular/core';
import { SbibankService } from '../sbibank.service';
import { FormControl, FormGroup } from '@angular/forms' 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

 public isEdit : boolean = false ;
 public id : any = ''


public accountForm :FormGroup = new FormGroup(
  {
    account_name : new FormControl(),
    available_balance : new FormControl(),
    currency : new FormControl(),
    user_image : new FormControl(),
    account_number : new FormControl()
  }
)

constructor(private _sbiservice:SbibankService, private _activatedRoute:ActivatedRoute, private _router:Router){
  _activatedRoute.params.subscribe(
    (data:any) => {

      if(data.id){
        this.isEdit = true ;
        this.id = data.id ;
      }


      _sbiservice.singelAccount(data.id).subscribe(
        (data2:any) => {
          this.accountForm.patchValue(data2)
        }
      )
    }
  )
}


submit(){

  if(this.isEdit){
    this._activatedRoute.params.subscribe(
      (data:any) => {
        this._sbiservice.updateAccount(this.accountForm.value, data.id).subscribe(
          (data2:any) => {
            this._router.navigateByUrl('dashboard/sbi')
            alert('updated sucessfully');
          }
        )
      }
    )
  }

  else{
  this._sbiservice.addingData(this.accountForm.value).subscribe(
    (data:any) => {
      alert('added successfully') ;
      this.accountForm.reset()
    },
    (err:any) => {
      alert('server error')
    }
  )
}
}

}
