import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from '../../model/user-account';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {

  userAccount: UserAccount | null = null;
  showSignOut: boolean = false;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {
    this.userAccount = accountService._userAccount;
    this.accountService.getObserver().subscribe(res => {
      this.userAccount = res;
    });
  }

  ngOnInit(): void {
    console.log(this.userAccount);
  }

  onLogoClick() {
    this.router.navigate(['/']);
  }
}
