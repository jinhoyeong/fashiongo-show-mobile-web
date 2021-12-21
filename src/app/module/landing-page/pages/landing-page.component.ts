import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailSubscribeService } from 'src/app/core/services/email-subscribe/email-subscribe.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [
    EmailSubscribeService
  ]
})
export class LandingPageComponent {

  popRegister: boolean = false;
  isEnd: boolean = false;
  isEmailSubscribe: boolean = true;

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private emailSubscribeService: EmailSubscribeService
  ) {
    this.initEmailSubscribe();
  }

  ngOnInit() {
    if(this.popRegister) {
      this.sendRegisterDialog();
    }
  }

  sendRegisterDialog() {
    this.dialogService.openRegisterDialog().afterClosed().subscribe(res => {
      if(res && res.navigate) {
        this.router.navigate(res.navigate);
      }
    });
  }

  initEmailSubscribe() {
    this.isEmailSubscribe = this.emailSubscribeService.statePopup;
    this.emailSubscribeService.getObservavle().subscribe(value => {
      this.isEmailSubscribe = value;
    });
  }
}
