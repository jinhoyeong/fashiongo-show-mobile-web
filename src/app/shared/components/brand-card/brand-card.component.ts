import { Component, Input, OnInit } from '@angular/core';
import { BrandInfo } from 'src/app/core/model/brand-info';

@Component({
  selector: 'brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent implements OnInit {

  @Input('brand') brand?: BrandInfo;
  src?: string = '';
  name?: string = '';
  txt?: string = '';

  constructor() {
  }

  ngOnInit(): void {
    if(this.brand) {
      this.setBrandInfo(this.brand);
    }
  }

  setBrandInfo({ src, name, txt }: BrandInfo) {
    this.src = src;
    this.name = name;
    this.txt = txt;
  }

  onBrandClick() {
    console.log(this.brand);
  }
}
