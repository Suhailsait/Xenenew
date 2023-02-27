import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDetailsComponent } from './seller-details/seller-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
