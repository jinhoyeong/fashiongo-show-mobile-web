import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserAccount } from '../../model/user-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  _userAccount: UserAccount | null = null;

  subject = new Subject<UserAccount>();

  constructor() {}

  setAccount(value: UserAccount) {
    this._userAccount = value;
    this.subject.next(this._userAccount);
  }

  getObserver(): Observable<UserAccount> {
    return this.subject.asObservable();
  }
  get userAccount() {
    return this._userAccount;
  }
}
