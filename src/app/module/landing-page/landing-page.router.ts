
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page.component';
const routes: Routes = [
	{
		path: '',
		component: LandingPageComponent
	}
];

export const LandingRoutingModule = RouterModule.forChild(routes);