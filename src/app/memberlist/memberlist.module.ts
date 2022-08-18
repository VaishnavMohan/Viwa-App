import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberlistPageRoutingModule } from './memberlist-routing.module';

import { MemberlistPage } from './memberlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberlistPageRoutingModule
  ],
  declarations: [MemberlistPage]
})
export class MemberlistPageModule {}
