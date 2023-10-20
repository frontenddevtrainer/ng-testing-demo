import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

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

  constructor(private _people: PeopleService){

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
  }
}
