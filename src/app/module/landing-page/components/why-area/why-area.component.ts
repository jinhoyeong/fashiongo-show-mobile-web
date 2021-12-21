import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'why-area',
  templateUrl: './why-area.component.html',
  styleUrls: ['./why-area.component.scss']
})
export class WhyAreaComponent implements OnInit {

  @Input('mt') mt?: string;

  constructor() {}

  ngOnInit(): void {
  }

}
