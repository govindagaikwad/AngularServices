import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http:HttpClient) { }

  postdata(){
    let url = "https://reqres.in/api/user";
    let data = {
      name:"shankar",roll:43,
    }
    return this._http.post(url,data);
  }
}
