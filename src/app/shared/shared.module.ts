import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnVisualComponent } from './components/btn-visual/btn-visual.component';
import { EmailSubscribeComponent } from './components/email-subscribe/email-subscribe.component';
import { FooterR01Component } from './components/footer-r01/footer-r01.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RegisterDialogComponent } from './dialog/register-dialog/register-dialog.component';
import { DefaultDialogComponent } from './dialog/default-dialog/default-dialog.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExhibitFormComponent } from './components/exhibit-form/exhibit-form.component';
import { EmailNameComponent } from './components/form/email-name/email-name.component';
import { BrandCardComponent } from './components/brand-card/brand-card.component';
import { OrderDialogComponent } from './dialog/order-dialog/order-dialog.component';
import { ThanksDialogComponent } from './dialog/thanks-dialog/thanks-dialog.component';


@NgModule({
  declarations: [
    BtnVisualComponent,
    EmailSubscribeComponent,
    FooterR01Component,
    RegisterDialogComponent,
    DefaultDialogComponent,
    DefaultButtonComponent,
    ExhibitFormComponent,
    EmailNameComponent,
    BrandCardComponent,
    OrderDialogComponent,
    ThanksDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BtnVisualComponent,
    EmailSubscribeComponent,
    FooterR01Component,
    RegisterDialogComponent,
    DefaultDialogComponent,
    RegisterDialogComponent,
    DefaultButtonComponent,
    ExhibitFormComponent,
    EmailNameComponent,
    BrandCardComponent,
    OrderDialogComponent,
    ThanksDialogComponent,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
