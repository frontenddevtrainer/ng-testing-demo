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

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_DATA);
  });

  it('should post data using http post', () => {
    const mockUser: Partial<IUser> = { id: 1, name: 'Def' };
    const mockResponse = { status: 'success' };
    //1
    service
      .postPersonDataToAPI(mockUser as IUser)
      // 2
      .subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

    // 1
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    // 2
    req.flush(mockResponse, { status: 200, statusText: "Not found" });
  });

  it('should throw error', () => {
    const mockUser: Partial<IUser> = { id: 1, name: 'Def' };
    const mockResponse = { status: 'success' };
    //1
    service
      .postPersonDataToAPI(mockUser as IUser)
      // 2
      .subscribe({
        error: (err)=>{
          expect(err.status).toBe(404)
        }
      });

    // 1
    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    // 2
    req.flush(mockResponse, { status: 404, statusText: "Not found" });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
