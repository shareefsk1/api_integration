import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _httpclient:HttpClient) {
  }

  getToken(id:any):Observable<any>{
    return this._httpclient.post('https://reqres.in/api/login',id)
  }

}
