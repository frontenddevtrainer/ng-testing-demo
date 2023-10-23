import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private _http: HttpClient) {}

  getPeopleData() {
    return ['abc'];
  }

  getPeopleDataWithAPI() {
    return this._http.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
