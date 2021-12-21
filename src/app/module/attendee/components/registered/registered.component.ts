import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account/account.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  email: string = '';
  name: string = '';

  constructor(
    private accountService: AccountService
  ) {
  }

  ngOnInit(): void {
    if(this.accountService.userAccount) {
      const { email, name } = this.accountService.userAccount;
      this.email = email;
      this.name = name;
    }
  }
}
