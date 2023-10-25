import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { By } from '@angular/platform-browser';
import { PeopleService } from './people.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserListingComponent } from './user-listing/user-listing.component';
import { TimerComponent } from './components/timer/timer.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './app-routing.module';
import { ProductspageComponent } from './components/productspage/productspage.component';
import { HomepageComponent } from './components/homepage/homepage.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  let peopleService: PeopleService;
  let router: Router;
  let location: Location

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      declarations: [AppComponent, ListingComponent, UserListingComponent, TimerComponent],
    });

    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.componentInstance;
    peopleService = TestBed.inject(PeopleService);
    spyOn(peopleService, 'getPeopleData');

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    fixture.detectChanges();
  });

  

  it('navigates to / should load the homepage component', async() => {
    await router.navigate(['']);
    expect(location.path()).toBe('/');
    expect(fixture.debugElement.query(By.directive(HomepageComponent))).toBeTruthy()
  });

  it('navigates to /products should load the homepage component', async() => {
    await router.navigate(['products']);
    expect(location.path()).toBe('/products');
    expect(fixture.debugElement.query(By.directive(ProductspageComponent))).toBeTruthy()
  });
});
