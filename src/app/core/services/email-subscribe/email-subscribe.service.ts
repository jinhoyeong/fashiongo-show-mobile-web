import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * 각 페이지 최초 진입시 팝업
 * close
 */
@Injectable({
  providedIn: 'root'
})
export class EmailSubscribeService {

  eskey: string = 'fashiongoweek_es';
  subject = new Subject<boolean>();
  blockValue = 1000 * 60 * 60 * 24 * 3;
  statePopup: boolean;

  constructor() {
    this.statePopup = this.loadPopipInfo();
  }

  close(block: boolean) {
    this.subject.next(false);
    this.statePopup = false;
    if(block) {
      localStorage.setItem(this.eskey, new Date().getTime() + '');
    }
  }

  getObservavle() {
    return this.subject.asObservable();
  }

  loadPopipInfo() {
    try {
      const date = localStorage.getItem(this.eskey);
      if(date) {
        const current = new Date().getTime();
        const gap = current - +date;
        if(gap > this.blockValue) {
          localStorage.removeItem(this.eskey);
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } catch(e) {
      return true;
    }
  }
}
