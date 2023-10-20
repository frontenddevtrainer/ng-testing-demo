import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingComponent } from './listing.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingComponent],
    });
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify click handler is called', () => {
    component.items = ['1'];
    fixture.detectChanges();
    spyOn(component, 'selectItem');
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector("button") as HTMLButtonElement;
    button.click();
    expect(component.selectItem).toHaveBeenCalled();
    expect(component.selectItem).toHaveBeenCalledWith("1")
  });
});
