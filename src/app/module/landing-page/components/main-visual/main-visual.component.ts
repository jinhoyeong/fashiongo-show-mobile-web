import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-visual',
  templateUrl: './main-visual.component.html',
  styleUrls: ['./main-visual.component.scss']
})
export class MainVisualComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  sendRegisterNow() {
    this.router.navigate(['/attendee']);
  }
  sendApplyNow() {
    this.router.navigate(['/exhibit']);
  }
}
