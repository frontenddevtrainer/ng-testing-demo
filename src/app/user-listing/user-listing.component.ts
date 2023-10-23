import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css'],
})
export class UserListingComponent implements OnInit {
  constructor(private _people: PeopleService) {}

  users: IUser[] = [];

  ngOnInit(): void {
    this._people.getPeopleDataWithAPI().subscribe({
      next: (value: IUser[]) => {
        console.log(value);
        this.users = value;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
