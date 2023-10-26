import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { Store } from "@ngrx/store"

import { selectValue } from './ngrx/selectors/app.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{applicationName}}</h1> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  applicationName: string = 'Hello World!!!';
  isShowHeading: boolean = true;
  selectedItem: any = ""
  value$!: Observable<string>;

  constructor(private _people: PeopleService, private store: Store){
    
  }

  items: string[] = [];

  getPeopleData(): string[] {
    return [];
  }

  hideHeading() {
    this.isShowHeading = false;
  }

  changeHeading() {
    this.applicationName = 'Hello World from Testing.';
  }

  onSelect(event: any){
    console.log(event);
    this.selectedItem = event;
  }

  ngOnInit(): void {
    this.items = ['1', '2', '3', '4'];
    this._people.getPeopleData();

    this.value$ = this.store.select(selectValue);
  }
}
