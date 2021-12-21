import { Component, OnInit, ViewChild } from '@angular/core';
import { ExhibitFormComponent } from 'src/app/shared/components/exhibit-form/exhibit-form.component';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ExhibitInfo } from '../../../../core/model/exhibit-info';

@Component({
  selector: 'app-existing-vendor',
  templateUrl: './existing-vendor.component.html',
  styleUrls: ['./existing-vendor.component.scss']
})
export class ExistingVendorComponent implements OnInit {

  @ViewChild(ExhibitFormComponent) exhibitFormComponent?: ExhibitFormComponent;

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
