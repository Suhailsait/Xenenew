import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { Createprop1Component } from './createprop1/createprop1.component';
import { Createprop2Component } from './createprop2/createprop2.component';
import { PointofcontactComponent } from './pointofcontact/pointofcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerDetailsComponent,
    Createprop1Component,
    Createprop2Component,
    PointofcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
