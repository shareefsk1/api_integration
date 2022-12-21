import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  constructor(private _vehicleService:VehicleService){}

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

submit(){
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
