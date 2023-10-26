import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetailspage',
  templateUrl: './productdetailspage.component.html',
  styleUrls: ['./productdetailspage.component.css'],
})
export class ProductdetailspageComponent implements OnInit {
  id!: string;

  constructor(private _activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
