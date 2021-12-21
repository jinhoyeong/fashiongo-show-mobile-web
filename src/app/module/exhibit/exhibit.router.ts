import { RouterModule, Routes } from "@angular/router";
import { BrandsComponent } from "./components/brands/brands.component";
import { ExhibitSelComponent } from "./components/exhibit-sel/exhibit-sel.component";
import { ExistingVendorComponent } from "./components/existing-vendor/existing-vendor.component";
import { NewVendorComponent } from "./components/new-vendor/new-vendor.component";
import { ExhibitComponent } from "./pages/exhibit/exhibit.component";

const routes: Routes = [{
	path: '',
	component: ExhibitComponent,
	children: [
		{ path: '', redirectTo: 'sel', pathMatch: 'full' },
		{ path: 'sel', component: ExhibitSelComponent },
		{ path: 'existing-vendor', component: ExistingVendorComponent },
		{ path: 'new-vendor', component: NewVendorComponent },
		{ path: 'brands', component: BrandsComponent },
	]
}];

export const ExhibitRoutingModule = RouterModule.forChild(routes);