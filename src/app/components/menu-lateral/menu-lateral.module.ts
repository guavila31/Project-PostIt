import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MenuLateralComponent
  ],
  imports: [
    CommonModule, 
    IonicModule
  ],
  exports:[
    MenuLateralComponent
  ]
})
export class MenuLateralModule { }
