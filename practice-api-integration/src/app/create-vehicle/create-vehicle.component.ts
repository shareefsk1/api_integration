import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public isEdit:boolean = false ;
  public id :any = ''
 

public vehicleForm:FormGroup = new FormGroup(
  {
    Vehicle : new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),


  }
)


constructor(private _vehicleService:VehicleService,private _activatedrouter:ActivatedRoute , private _router:Router){


  _activatedrouter.params.subscribe(
    (data:any) => {

      if(data.id) {
        this.isEdit = true ;
        this.id = data.id
      }

      _vehicleService.getvehicle(data.id).subscribe(
        (data2:any) => {
          this.vehicleForm.patchValue(data2)
        }
      )
    }
  )

}


submit(){

  if(this.isEdit) {

    this._activatedrouter.params.subscribe(
      (data:any) => {
        this._vehicleService.update(this.vehicleForm.value, data.id).subscribe(
          (data2:any) => {
            alert('Updated Successful') ;
            this._router.navigateByUrl('dashboard/vehicle')
          }
        )
      }
    )

  }

  else{
    this._vehicleService.addingData(this.vehicleForm.value).subscribe(
      (data:any) => {
        alert('Createde Successfully')
      },
      (err:any) => {
        alert('internal seever error')
      }
    )
  }



}

}
