import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'footer-r01',
  templateUrl: './footer-r01.component.html',
  styleUrls: ['./footer-r01.component.scss']
})
export class FooterR01Component implements OnInit {

  @ViewChild('about') about?: ElementRef;
  @ViewChild('support') support?: ElementRef;
  @ViewChild('services') services?: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  onParentClick(type: string) {
    const li = this.getElement(type)?.nativeElement;
    this.drowdown(li);
  }

  getElement(type: string) {
    switch(type) {
      case 'about': return this.about;
      default: return this.about;
      case 'support': return this.support;
      case 'services': return this.services;
    }
  }

  drowdown(li: HTMLLIElement) {
    if(li.classList.contains('current')) {
      li.classList.remove('current');
    } else {
      li.classList.add('current');
    }
  }
}
