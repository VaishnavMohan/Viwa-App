import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersPage } from './members.page';

const routes: Routes = [
  {
    path: '',
    component: MembersPage
  },
  {
    path: 'members',
    loadChildren: () => import('./members.module').then( m => m.MembersPageModule)
  },
  {
    path: 'edit-members',
    loadChildren: () => import('../edit-members/edit-members.module').then( m => m.EditMembersPageModule)
  },
  {
    path: 'memberlist',
    loadChildren: () => import('../memberlist/memberlist.module').then( m => m.MemberlistPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersPageRoutingModule {}

