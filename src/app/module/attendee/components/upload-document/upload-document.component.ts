import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/account/account.service';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  email: string = '';
  name: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    if(this.accountService.userAccount) {
      const { email, name } = this.accountService.userAccount;
      this.email = email;
      this.name = name;
    }
  }

  onUploadClick() {
    
  }
}
