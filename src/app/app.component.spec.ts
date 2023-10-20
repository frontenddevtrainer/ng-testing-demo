import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { By } from '@angular/platform-browser';
import { PeopleService } from './people.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  let peopleService: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, ListingComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
    peopleService = TestBed.inject(PeopleService);
    spyOn(peopleService, "getPeopleData");
    fixture.detectChanges();
  });

  it("should call service method getPeopleData", ()=>{
      expect(peopleService.getPeopleData).toHaveBeenCalled();
  })

  it('should create the app', () => {
    expect(componentInstance).toBeTruthy();
  });

  it(`should have as title 'ng-testing-demo'`, () => {
    expect(componentInstance.applicationName).toEqual('Hello World!!!');
  });

  it(`should return empty array when calling getPeopleData()'`, () => {
    expect(componentInstance.getPeopleData()).toEqual([]);
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello World');
  });

  it('should hide the heading after calling the hideHeading()', () => {
    fixture.detectChanges(); // State - Heading is shown
    componentInstance.hideHeading(); // Set isShowHeading = false
    fixture.detectChanges(); // Get updated template update.
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')).toBeFalsy();
  });

  it('should update heading to "Hello World from Testing."', () => {
    fixture.detectChanges(); // State - Heading is shown
    componentInstance.changeHeading(); // Set isShowHeading = false
    fixture.detectChanges(); // Get updated template update.
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello World from Testing.'
    );
  });

  it('should hide heading on click of hide button"', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const hideButton = compiled.querySelector(
      "[data-testid='hide-button']"
    ) as HTMLButtonElement;
    hideButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('h1')).toBeFalsy();
  });

  it('should change heading on button click"', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const hideButton = compiled.querySelector(
      "[data-testid='change-button']"
    ) as HTMLButtonElement;
    hideButton.click();
    fixture.detectChanges();
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello World from Testing.'
    );
  });

  it('should show list on ngOnInit"', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const listing = compiled.querySelector('ul');
    const items = listing?.querySelectorAll('li');
    expect(items?.length).toBe(4);
  });

  it('should update h2 if listing item is clicked"', () => {
    spyOn(componentInstance, 'onSelect');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    /// const childListing = fixture.debugElement.children[4].componentInstance;
    const childListing: ListingComponent = fixture.debugElement.queryAll(
      By.directive(ListingComponent)
    )[0].componentInstance;
    childListing.select.emit(1);
    expect(componentInstance.onSelect).toHaveBeenCalledWith(1);
  });
});
