import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  time = 5;
  private intervalID: any;

  constructor() {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.intervalID = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.intervalID);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
}
