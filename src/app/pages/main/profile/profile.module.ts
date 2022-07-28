import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { FeedItemModule } from 'src/app/components/feed-item/feed-item.module';
import { ProfileItemModule } from 'src/app/components/profile-item/profile-item.module';
import { MenuLateralComponent } from 'src/app/components/menu-lateral/menu-lateral.component';
import { MenuLateralModule } from 'src/app/components/menu-lateral/menu-lateral.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    ProfileItemModule,
    MenuLateralModule
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
