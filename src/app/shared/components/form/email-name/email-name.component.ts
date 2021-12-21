import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'email-name',
  templateUrl: './email-name.component.html',
  styleUrls: ['./email-name.component.scss']
})
export class EmailNameComponent implements OnInit {

  @Input('email') email?: string;
  @Input('name') name?: string;
  @Input('btnLabel') btnLabel?: string;

  constructor() {}

  ngOnInit(): void {
  }

}
