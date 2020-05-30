import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRootComponent } from './home-root/home-root.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeIndustryComponent } from './home-industry/home-industry.component';
import { HomeEducationComponent } from './home-education/home-education.component';

@NgModule({
  declarations: [HomeRootComponent, HomeBannerComponent, HomeIndustryComponent, HomeEducationComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
  ],
  exports: [HomeRootComponent],
})
export class HomeModule { }
