import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRootComponent } from './home-root/home-root.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HomeRootComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatMenuModule,
  ],
  exports: [HomeRootComponent],
})
export class HomeModule { }
