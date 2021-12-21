import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./module/landing-page/landing-page.module').then(m => m.LandingPageModule)
}, {
  path: 'attendee',
  loadChildren: () => import('./module/attendee/attendee.module').then(m => m.AttendeeModule)
}, {
  path: 'exhibit',
  loadChildren: () => import('./module/exhibit/exhibit.module').then(m => m.ExhibitModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
