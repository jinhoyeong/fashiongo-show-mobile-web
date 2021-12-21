import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ExhibitInfo } from '../../../../core/model/exhibit-info';

@Component({
  selector: 'app-new-vendor',
  templateUrl: './new-vendor.component.html',
  styleUrls: ['./new-vendor.component.scss']
})
export class NewVendorComponent implements OnInit {

  constructor(
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
  }

  sendValues(value: { exhibit: ExhibitInfo, invalid: boolean }) {
    console.log(value);
  }
  
  onSubmit() {
    this.dialogService.openThankDialog().afterClosed().subscribe(res => {
      console.log(res);
    })
  }
}
