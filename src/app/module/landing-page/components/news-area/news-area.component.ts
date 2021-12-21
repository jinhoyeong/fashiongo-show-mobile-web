import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'news-area',
  templateUrl: './news-area.component.html',
  styleUrls: ['./news-area.component.scss']
})
export class NewsAreaComponent implements OnInit {

  config: SwiperOptions = {};
  swiper: Swiper | null = null;

  news = [{
    newsSrc: './assets/img/img_news_2.jpg',
    logoSrc: './assets/img/img_news_logo_2.svg',
    txt: 'Wholesale marketplaces say virtual trade shows are here to stay',
    date: 'August 16, 2021',
    link: 'https://www.modernretail.co/platforms/wholesale-marketplaces-say-virtual-trade-shows-are-here-to-stay/'
  }, {
    newsSrc: './assets/img/img_news_5.png',
    logoSrc: './assets/img/img_news_logo_5.png',
    txt: 'Online Wholesale Marketplace <br>FashionGo Brings Back ‘FashionGo <br>Week’ Online Trade Show Experience',
    date: 'Aug 2, 2021',
    link: 'https://www.mannpublications.com/fashionmannuscript/2021/08/02/online-wholesale-marketplace-fashiongo-brings-back-fashiongo-week-online-trade-show-experience/'
  }, {
    newsSrc: './assets/img/img_news_3.jpg',
    logoSrc: './assets/img/img_news_logo_3.svg',
    txt: 'Third ‘FashionGo Week’ Slated for August',
    date: 'Jul 19, 2021',
    link: 'https://wwd.com/business-news/markets/third-fashiongo-week-slated-for-august-1234884638/'
  }, {
    newsSrc: './assets/img/img_news_4.jpg',
    logoSrc: './assets/img/img_news_logo_4.svg',
    txt: '6 Reasons why digital fashion shows will be stylish post-pandemic',
    date: 'May 3, 2021',
    link: 'https://www.tsnn.com/news/6-reasons-why-digital-fashion-shows-will-be-stylish-postpandemic'
  }, {
    newsSrc: './assets/img/img_news_1.jpg',
    logoSrc: './assets/img/img_news_logo_1.svg',
    txt: 'FashionGo Week to Become Biannual Digital Trade Show',
    date: 'Mar 4, 2021',
    link: 'https://www.apparelnews.net/news/2021/mar/04/fashiongo-week-become-biannual-digital-trade-show/'
  }, {
    newsSrc: './assets/img/img_news_6.jpg',
    logoSrc: './assets/img/img_news_logo_6.svg',
    txt: 'B2B Fashion Marketplace Taps New Sales With Virtual Trade Shows',
    date: 'Feb 15, 2021',
    link: 'https://www.pymnts.com/news/merchant-innovation/2021/b2b-fashion-marketplace-taps-new-sales-with-virtual-trade-shows/'
  }];

  @Input('mt') mt?: string;

  constructor() {}

  ngOnInit(): void {

  }

  onSwiper(swipe: any) {
    this.swiper = swipe;
  }

}
