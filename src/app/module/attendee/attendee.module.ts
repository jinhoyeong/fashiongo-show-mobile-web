import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendeeComponent } from './pages/attendee/attendee.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttendeeRoutingModule } from './attendee.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AttendeeService } from './services/attendee.service';
import { RegisteredComponent } from './components/registered/registered.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { BeginRegistrationComponent } from './components/begin-registration/begin-registration.component';



@NgModule({
  declarations: [
    AttendeeComponent,
    RegistrationComponent,
    RegisteredComponent,
    UploadDocumentComponent,
    BeginRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AttendeeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    AttendeeService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AttendeeModule {}
