import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  public vehicles:any=[];
  public keys :any =[];
  public keyword: any = ''
  public order: any = ''
  public column: any = ''

     constructor(private _vehicleService:VehicleService){
      this._vehicleService.getvehicledata().subscribe(
        (data:any)=>{
          this.vehicles=data;
          this.keys=Object.keys(data[0])
        },
        (err:any)=>{
          alert("some server erros")
        }
      )
     }

     filteredData(){
      this._vehicleService.getFilteredData(this.keyword).subscribe(
        (data:any)=>{
          this.vehicles=data;
        },
        (err:any)=>{
          alert("some server erros")
        }
      )
     }

     sort(){
      this._vehicleService.getSortedData(this.column,this.order).subscribe(
        (data:any)=>{
          this.vehicles=data;
        },
        (err:any)=>{
          alert("some server erros")
        }
      )
     }

     delete(id:any) {
          this._vehicleService.delete(id).subscribe(
            (dat:any) => {
              alert('Deleted sucessfully')
              location.reload()
            },
            (err:any)=>{
              alert("some server erros")
            }
          )
     }

     pagination(pageNo:any){
      this._vehicleService.pagination(pageNo).subscribe(
        (data:any)=>{
          this.vehicles=data;
        },
        (err:any)=>{
          alert("some server erros")
        }
      )
     }

   }

   





