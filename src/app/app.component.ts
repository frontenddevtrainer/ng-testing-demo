import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{applicationName}}</h1> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  applicationName: string = 'Hello World!!!';
  isShowHeading: boolean = true;

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

  ngOnInit(): void {
    this.items = ['1', '2', '3', '4'];
  }
}
