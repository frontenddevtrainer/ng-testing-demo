import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent {
  @Input() items: string[] = [];
  @Output() select: EventEmitter<any> = new EventEmitter()

  selectItem(item: any) {
    console.log(item);
    this.select.emit(item)
  }
}
