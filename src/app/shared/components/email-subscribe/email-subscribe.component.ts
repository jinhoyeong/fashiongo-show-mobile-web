import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EmailSubscribeService } from 'src/app/core/services/email-subscribe/email-subscribe.service';

@Component({
  selector: 'email-subscribe',
  templateUrl: './email-subscribe.component.html',
  styleUrls: ['./email-subscribe.component.scss']
})
export class EmailSubscribeComponent implements OnInit {

  checked: boolean = false;
  email = new FormControl('', [Validators.required, Validators.maxLength(20)]);

  constructor(
    private emailSubscribeService: EmailSubscribeService
  ) {}

  ngOnInit(): void {
  }

  onClose() {
    this.emailSubscribeService.close(this.checked);
    // this.emailSubscribeService.set(false);
  }
  onBtnClick() {
    console.log(this.email.value);
  }
}
