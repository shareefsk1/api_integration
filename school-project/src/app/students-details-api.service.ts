import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsDetailsApiService {

  constructor(private _httpClient:HttpClient) {
   }

   getStudents():Observable<any>{
   return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=13&page=1')
   }

   sortedStudents(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy=' + column + '&order=' + order)

   }

   filter(keyword:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter=' + keyword)
   }

   pagination(page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=13&page=' + page)
   }

   delete(id:any){
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/' + id)
   }

}
