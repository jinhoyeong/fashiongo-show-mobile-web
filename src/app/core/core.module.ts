import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';



@NgModule({
  declarations: [
    LandingHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingHeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
