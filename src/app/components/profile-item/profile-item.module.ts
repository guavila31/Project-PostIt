import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileItemComponent } from './profile-item.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileItemComponent,
  ],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule
  ], 
  exports:[
    ProfileItemComponent,
  ],
})
export class ProfileItemModule { }
