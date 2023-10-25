import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  constructor(private _http: HttpClient) { }

  getUserData(){
    return this._http.get<any>("https://api.example.com/user")
    .pipe(tap((response)=>{
      this.user = response;
    }))
  }

}
