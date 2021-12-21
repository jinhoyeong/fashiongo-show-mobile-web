
import { Routes, RouterModule } from '@angular/router';
import { RegisteredComponent } from './components/registered/registered.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AttendeeComponent } from './pages/attendee/attendee.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { BeginRegistrationComponent } from './components/begin-registration/begin-registration.component';

const routes: Routes = [
	{
		path: '',
		component: AttendeeComponent,
		children: [
			{ path: '', redirectTo: 'registration', pathMatch: 'full' },
			{ path: 'registration', component: RegistrationComponent },
			{ path: 'registered', component: RegisteredComponent },
			{ path: 'upload', component: UploadDocumentComponent },
			{ path: 'begin', component: BeginRegistrationComponent },
		]
	}
];

export const AttendeeRoutingModule = RouterModule.forChild(routes);