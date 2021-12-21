import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page.component';
import { LandingRoutingModule } from './landing-page.router';
import { SwiperModule } from 'swiper/angular';
import { BrandAreaComponent } from './components/brand-area/brand-area.component';
import { EventAreaComponent } from './components/event-area/event-area.component';
import { ExperienceAreaComponent } from './components/experience-area/experience-area.component';
import { GuideAreaComponent } from './components/guide-area/guide-area.component';
import { MainVisualComponent } from './components/main-visual/main-visual.component';
import { NewsAreaComponent } from './components/news-area/news-area.component';
import { WhyAreaComponent } from './components/why-area/why-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogService } from 'src/app/shared/dialog/dialog.service';


@NgModule({
  declarations: [
    LandingPageComponent,
    BrandAreaComponent,
    EventAreaComponent,
    ExperienceAreaComponent,
    GuideAreaComponent,
    MainVisualComponent,
    NewsAreaComponent,
    WhyAreaComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SwiperModule,
    SharedModule,
  ],
  providers: [
    DialogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageModule {}
