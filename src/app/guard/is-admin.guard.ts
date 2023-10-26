import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuardService {
  constructor(private _user: UserService) {}

  isAdminGuard() {
    return this._user.isAdmin;
  }
}

export function adminGuardFactory(adminGuardService: IsAdminGuardService) {
  return adminGuardService.isAdminGuard.bind(adminGuardService);
}
