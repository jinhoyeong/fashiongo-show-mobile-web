import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'brand-area',
  templateUrl: './brand-area.component.html',
  styleUrls: ['./brand-area.component.scss']
})
export class BrandAreaComponent {

  config: SwiperOptions = {
    width: 255
  };
  swiper: Swiper | null = null;

  slides = [{
    src: 'assets/img/img_brand_1.jpg'
  }, {
    src: 'assets/img/img_brand_1.jpg'
  }, {
    src: 'assets/img/img_brand_1.jpg'
  }, {
    src: 'assets/img/img_brand_1.jpg'
  }];

  constructor(
    private router: Router
  ) {}

  onSwiper(swipe: any) {
    this.swiper = swipe;
  }

  onMoreClick() {
    this.router.navigate(['/exhibit/brands']);
  }
}
