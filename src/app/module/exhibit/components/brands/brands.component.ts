import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BrandInfo } from 'src/app/core/model/brand-info';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  originBrands: BrandInfo[] = [
    new BrandInfo({
      id: 1,
      src: './assets/img/img_brand_ss_1.jpg',
      name: 'House of Lords Rodeo C...',
      txt: `Hayden Los Angeles is a LA-designed, inclusive Womens and Tween apparel brand inspired by
					the birth of the Hayden Los Angeles is a LA-designed, inclusive Womens and Tween apparel brand inspired by the
					birth of the...`}),
    new BrandInfo({
      id: 2,
      src: './assets/img/img_brand_ss_1.jpg',
      name: ' of Rodeo C...',
      txt: `Hayden Los Angeles is a LA-designed, inclusive Womens and Tween apparel brand inspired by
					the birth of the `}),
    new BrandInfo({
      id: 3,
      src: './assets/img/img_brand_ss_1.jpg',
      name: 'House ',
      txt: `Hayden Los An
					the birth of the Hayden Los Angeles is a LA-designed, inclusive Womens and Tween apparel brand inspired by the
					birth of the...`})
  ]

  shownBrands: BrandInfo[] = [];
  stateSort: 'asc' | 'desc' = 'asc';

  constructor(
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.shownBrands = this.sorter(this.originBrands, this.stateSort);
  }

  sorter(list: BrandInfo[], sort: 'asc' | 'desc') {
    if(sort === 'asc') {
      return list.sort((a: BrandInfo, b: BrandInfo) => a.id - b.id);
    } else {
      return list.sort((a: BrandInfo, b: BrandInfo) => b.id - a.id);
    }
  }

  onSortClick() {
    this.dialogService.openOrderDialog().afterClosed().subscribe((type: 'asc' | 'desc' | null) => {
      if(type) {
        this.stateSort = type;
        this.shownBrands = this.sorter(this.originBrands, this.stateSort);
      }
    });
  }
}
