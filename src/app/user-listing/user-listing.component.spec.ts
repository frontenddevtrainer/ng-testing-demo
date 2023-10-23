import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListingComponent } from './user-listing.component';
import { IUser } from '../interfaces/user';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PeopleService } from '../people.service';
import { of } from 'rxjs';

const MOCK_DATA_2_USERS: Partial<IUser>[] = [
  {
    id: 1,
    username: 'abc',
  },
  {
    id: 2,
    username: 'def',
  },
];

describe('UserListingComponent', () => {
  let component: UserListingComponent;
  let fixture: ComponentFixture<UserListingComponent>;
  let peopleService: PeopleService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserListingComponent],
      providers: [PeopleService],
    }).compileComponents();

    peopleService = TestBed.inject(PeopleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListingComponent);
    component = fixture.componentInstance;
    spyOn(peopleService, 'getPeopleDataWithAPI').and.returnValue(
      of(MOCK_DATA_2_USERS as IUser[])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user data', () => {
    component.ngOnInit();
    expect(component.users.length).toBe(2);
    expect(component.users).toEqual(MOCK_DATA_2_USERS as IUser[]);
  });

  it('should fetch user data and show listing', () => {
    component.ngOnInit();
    const listitem = fixture.nativeElement.querySelectorAll(
      'li'
    ) as HTMLCollection;
    expect(listitem.length).toBe(2);
    expect(listitem[0].textContent).toContain('abc');
  });
});
