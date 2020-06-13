import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRootComponent } from './home-root/home-root.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeIndustryComponent } from './home-industry/home-industry.component';
import { HomeEducationComponent } from './home-education/home-education.component';
import { HomeSchoolComponent } from './home-school/home-school.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { HomeExtraComponent } from './home-extra/home-extra.component';
import { HomeContactComponent } from './home-contact/home-contact.component';

@NgModule({
  declarations: [HomeRootComponent, HomeBannerComponent, HomeIndustryComponent, HomeEducationComponent, HomeSchoolComponent, HomeSkillsComponent, HomeExtraComponent, HomeContactComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [HomeRootComponent],
})
export class HomeModule { }
