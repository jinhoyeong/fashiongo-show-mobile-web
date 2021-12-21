import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/core/model/user-account';
import { AccountService } from 'src/app/core/services/account/account.service';
import { AttendeeService } from '../../services/attendee.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.maxLength(20)]);

  constructor(
    private router: Router,
    private attendeeService: AttendeeService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.email.valueChanges.subscribe(res => {
      console.log(res);
    })
  }

  onNextClick() {
    if(this.email.invalid) {
      this.router.navigate(['/attendee/upload']);
    } else {
      this.attendeeService.putEmail(this.email.value).subscribe((res: any) => {
        const account = new UserAccount({
          id: 0,
          name: 'hyjin',
          email: this.email.value
        });
        this.accountService.setAccount(account);
        this.router.navigate(['/attendee/registered']);
      })
    }
  }
}
