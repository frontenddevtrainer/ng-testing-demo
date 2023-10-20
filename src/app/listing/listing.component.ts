import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  @Input() items: string[] = [];

  selectItem(item: any) {
    console.log(item);
  }
}
