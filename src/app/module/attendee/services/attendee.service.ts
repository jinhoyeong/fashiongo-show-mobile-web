import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserAccount } from 'src/app/core/model/user-account';

@Injectable({
  providedIn: 'root'
})
export class AttendeeService {

  subject = new Subject<UserAccount>();

  constructor(
    private http: HttpClient
  ) {}

  putEmail(email: string): Observable<any> {
    const path = 'http://localhost:3000/test';
    return this.http.get(path);
    // setTimeout(() => {
    //   const account = new UserAccount({
    //     id: 0,
    //     name: 'hyjin',
    //     email: email
    //   });
    //   this.subject.next(account);
    // }, 1000);
    // return this.subject.asObservable();
  }
}
