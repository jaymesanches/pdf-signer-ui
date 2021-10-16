import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DemoMaterialModule } from './../demo-material-module';
import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './sign.component';
import { CertificatesDialogComponent } from './certificates-dialog/certificates-dialog.component';

@NgModule({
  declarations: [
    SignComponent,
    CertificatesDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    SignRoutingModule,
    NgxExtendedPdfViewerModule,
    MatFormFieldModule
  ]
})
export class SignModule { }
