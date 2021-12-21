import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account/account.service';

@Component({
  selector: 'app-begin-registration',
  templateUrl: './begin-registration.component.html',
  styleUrls: ['./begin-registration.component.scss']
})
export class BeginRegistrationComponent implements OnInit {

  email: string = '';

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    if(this.accountService.userAccount) {
      const { email } = this.accountService.userAccount;
      this.email = email;
    }
  }
}
