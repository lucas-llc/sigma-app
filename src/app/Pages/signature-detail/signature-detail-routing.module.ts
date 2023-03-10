import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignatureDetailPage } from './signature-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SignatureDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignatureDetailPageRoutingModule {}
