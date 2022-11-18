import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayTestComponent } from './form-array-test/form-array-test.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalTokenComponent } from './modal-token/modal-token.component';

@NgModule({
  declarations: [AppComponent, FormArrayTestComponent, ModalTokenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [FormArrayTestComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
