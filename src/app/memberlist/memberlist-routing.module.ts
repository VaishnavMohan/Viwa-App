import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberlistPage } from './memberlist.page';

const routes: Routes = [
  {
    path: '',
    component: MemberlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberlistPageRoutingModule {}
