import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[btn-visual]',
  templateUrl: './btn-visual.component.html',
  styleUrls: ['./btn-visual.component.scss']
})
export class BtnVisualComponent {

  @Input('dt') dt?: string;
  @Input('dd') dd?: string;
  @Input('btnLabel') btnLabel?: string;
  @Output() outputClick = new EventEmitter();

  constructor() {}

  onBtnClick() {
    this.outputClick.emit();
  }
}
