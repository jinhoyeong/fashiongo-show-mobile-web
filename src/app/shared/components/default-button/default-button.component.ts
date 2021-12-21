import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {

  @Input('clsName') clsName: string = '';
  @Input('btnLabel') btnLabel: string = '';

  constructor() {}

  ngOnInit(): void {
  }

}
