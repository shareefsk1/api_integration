import { Component } from '@angular/core';
import { SbibankService } from '../sbibank.service';

@Component({
  selector: 'app-sbi-bank',
  templateUrl: './sbi-bank.component.html',
  styleUrls: ['./sbi-bank.component.css']
})
export class SbiBankComponent {
  public accounts : any = []
  public keys : any = []
  public keyword : any = ''
  public column: any = ''
  public order: any = ''

  constructor(private _httpClient:SbibankService){
    _httpClient.getBankData().subscribe(
      (data:any) => {
        this.accounts = data ;
        this.keys = Object.keys(data[0])
      },
      (err:any) => {
        alert('internal server error')
      }
    )
  }


  filter(){
    this._httpClient.filteredData(this.keyword).subscribe(
      (data:any) => {
        this.accounts = data ;
      },
      (err:any) => {
        alert('internal server error')
      }
    )
  }


  sort(){
   this._httpClient.sortData(this.column,this.order).subscribe(
    (data:any) => {
      this.accounts = data ;
    },
    (err:any) => {
      alert('internal server error')
    }
   )
  }

  delete(id:any){
    this._httpClient.delete(id).subscribe(
      (data:any) => {
        alert('Deleted Sucessfully')
        location.reload() ;
      },
      (err:any) => {
        alert('internal server error')
      } 
    )
  }

  pagination(page:any){
    this._httpClient.pagination(page).subscribe(
      (data:any) => {
        this.accounts = data ;
      },
      (err:any) => {
        alert('internal server error')
      }
    )
  }





}
