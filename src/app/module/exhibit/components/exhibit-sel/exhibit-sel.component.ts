import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exhibit-sel',
  templateUrl: './exhibit-sel.component.html',
  styleUrls: ['./exhibit-sel.component.scss']
})
export class ExhibitSelComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onVenderClick() {
    this.router.navigate(['/exhibit/existing-vendor']);
  }

  onSellClick() {
    this.router.navigate(['/exhibit/new-vendor']);
  }
}
