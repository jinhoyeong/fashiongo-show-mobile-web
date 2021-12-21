import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExhibitInfo } from 'src/app/core/model/exhibit-info';

@Component({
  selector: 'exhibit-form',
  templateUrl: './exhibit-form.component.html',
  styleUrls: ['./exhibit-form.component.scss']
})
export class ExhibitFormComponent implements OnInit {

  @Input('guideText') guideText?: string;
  @Output() outputValues = new EventEmitter();

  exhibitForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    companyName: new FormControl('', [Validators.required]),
    contactNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
  });

  constructor() {}

  ngOnInit(): void {
    this.exhibitForm.valueChanges.subscribe(res => {
      const result = new ExhibitInfo(res);
      this.outputValues.emit({
        exhibit: result,
        invalid: this.exhibitForm.invalid
      });
    });
  }
}
