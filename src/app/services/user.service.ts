import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { IUser } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: IUser;

  constructor(private _http: HttpClient) { }

  getUserData(){
    return this._http.get<IUser>("https://api.example.com/user")
    .pipe(tap((response)=>{
      this.user = response;
    }))
  }

}
