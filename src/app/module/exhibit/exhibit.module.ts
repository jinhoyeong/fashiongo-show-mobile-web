import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitRoutingModule } from './exhibit.router';
import { ExhibitComponent } from './pages/exhibit/exhibit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExistingVendorComponent } from './components/existing-vendor/existing-vendor.component';
import { NewVendorComponent } from './components/new-vendor/new-vendor.component';
import { ExhibitSelComponent } from './components/exhibit-sel/exhibit-sel.component';
import { BrandsComponent } from './components/brands/brands.component';
import { DialogService } from 'src/app/shared/dialog/dialog.service';


@NgModule({
  declarations: [
    ExhibitComponent,
    ExistingVendorComponent,
    NewVendorComponent,
    ExhibitSelComponent,
    BrandsComponent
  ],
  imports: [
    CommonModule,
    ExhibitRoutingModule,
    SharedModule
  ],
  providers: [
    DialogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExhibitModule {}
