import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRootComponent } from './home-root/home-root.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeIndustryComponent } from './home-industry/home-industry.component';

@NgModule({
  declarations: [HomeRootComponent, HomeBannerComponent, HomeIndustryComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatMenuModule,
  ],
  exports: [HomeRootComponent],
})
export class HomeModule { }
