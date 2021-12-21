import { Component, OnInit } from '@angular/core';
import { EmailSubscribeService } from 'src/app/core/services/email-subscribe/email-subscribe.service';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.scss'],
  providers: [
    EmailSubscribeService
  ]
})
export class AttendeeComponent implements OnInit {

  isEmailSubscribe: boolean = true;

  constructor(
    private emailSubscribeService: EmailSubscribeService
  ) {
    this.initEmailSubscribe();
  }

  ngOnInit(): void {
  }

  initEmailSubscribe() {
    this.isEmailSubscribe = this.emailSubscribeService.statePopup;
    this.emailSubscribeService.getObservavle().subscribe(value => {
      this.isEmailSubscribe = value;
    });
  }
}
