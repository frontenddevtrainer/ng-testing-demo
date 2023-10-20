import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>{{applicationName}}</h1> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  applicationName = "Hello World!!!";
}
