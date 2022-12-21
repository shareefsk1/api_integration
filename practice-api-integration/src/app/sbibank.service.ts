import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SbibankService {

  constructor(private _sbiBankService:HttpClient) { }

  getBankData():Observable<any> {
    return  this._sbiBankService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }

  filteredData(keyword:any):Observable<any>{
    return this._sbiBankService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=" + keyword)
  }

  sortData(column:any,order:any):Observable<any>{
    return this._sbiBankService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+ column +"&order=" + order)
  }

delete(id:any):Observable<any>{
  return this._sbiBankService.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
}

pagination(pageNo:any):Observable<any>{
  return this._sbiBankService.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=5&page=" + pageNo)
}

addingData(data:any):Observable<any>{
  return this._sbiBankService.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
}

}
