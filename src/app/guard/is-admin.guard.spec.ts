import { TestBed, inject } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { IsAdminGuardService, adminGuardFactory } from './is-admin.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';

describe('isAdminGuard', () => {
  let service: IsAdminGuardService;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj('UserService', ['isAdmin']);

    TestBed.configureTestingModule({
      providers: [
        IsAdminGuardService,
        {
          provide: UserService,
          useValue: userServiceMock,
        },
      ],
    });

    service = TestBed.inject(IsAdminGuardService);
  });
  it('should return true when is isAdmin', () => {
    userServiceMock.isAdmin = true;
    const result = service.isAdminGuard();
    expect(result).toBe(true);
  });

  it('should return true when is not isAdmin', () => {
    userServiceMock.isAdmin = false;
    const result = service.isAdminGuard();
    expect(result).toBe(false);
  });
});
