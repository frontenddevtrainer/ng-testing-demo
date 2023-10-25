import {
  TestBed,
  fakeAsync,
  flushMicrotasks,
  tick,
} from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should verify async timer is done', (done: DoneFn) => {
    let testValue = false;
    setTimeout(() => {
      testValue = true;
      expect(testValue).toBeTruthy();
      done();
    }, 1000);
  });

  it('should verify async timer is completed with fakeAsync and tick', fakeAsync(() => {
    let testValue = false;
    setTimeout(() => {
      testValue = true;
    });
    tick(1000);
    expect(testValue).toBeTruthy();
  }));

  it('should verify promise is completed with fakeAsync and tick', fakeAsync(() => {
    let testValue = false;

    Promise.resolve().then(() => {
      testValue = true;
    });

    flushMicrotasks();

    expect(testValue).toBeTruthy();
  }));

  it('should verify data from api', fakeAsync(() => {
    let data: any;
    const mockdata = { data: 'abc' };

    service.getUserData().subscribe((response) => {
      data = response;
    });

    const req = httpMock.expectOne('https://api.example.com/user');
    req.flush(mockdata);
    tick();

    expect(data).toEqual(mockdata);
    expect(service.user).toEqual(mockdata);
  }));
});
