import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IUser } from './interfaces/user';

describe('PeopleService', () => {
  let service: PeopleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PeopleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data using HTTP', () => {
    const MOCK_DATA: Partial<IUser>[] = [
      {
        id: 1,
        username: 'abc',
      },
    ];

    service.getPeopleDataWithAPI().subscribe((response) => {
      expect(response.length).toBe(1);
    });

    const req = httpMock.expectOne("https://jsonplaceholder.typicode.com/users");
    expect(req.request.method).toBe("GET");
    req.flush(MOCK_DATA);

  });

  afterEach(()=>{
    httpMock.verify()
  })
});
