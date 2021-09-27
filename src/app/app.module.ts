import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/sections/education/education.component';
import { TimelineEntryComponent } from './components/sections/education/timeline-entry/timeline-entry.component';
import { GithubCornerComponent } from './components/sections/header/github-corner/github-corner.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { OverviewComponent } from './components/sections/overview/overview.component';
import { BachelorDialogComponent } from './components/sections/projects/bachelor/bachelor-dialog/bachelor-dialog.component';
import { BachelorComponent } from './components/sections/projects/bachelor/bachelor.component';
import { IntershopPwaDialogComponent } from './components/sections/projects/intershop-pwa/intershop-pwa-dialog/intershop-pwa-dialog.component';
import { IntershopPwaComponent } from './components/sections/projects/intershop-pwa/intershop-pwa.component';
import { PersonalWebsiteComponent } from './components/sections/projects/personal-website/personal-website.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { RecommenderSystemComponent } from './components/sections/projects/recommender-system/recommender-system.component';
import { SkillItemComponent } from './components/sections/skills/skill-item/skill-item.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { ChipTagListComponent } from './components/shared/chip-tag-list/chip-tag-list.component';
import { ScrollFabComponent } from './components/shared/scroll-fab/scroll-fab.component';
import { ScrollableSectionDirective } from './directives/scrollable-section/scrollable-section.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    EducationComponent,
    TimelineEntryComponent,
    SkillsComponent,
    SkillItemComponent,
    ProjectsComponent,
    BachelorComponent,
    ChipTagListComponent,
    IntershopPwaComponent,
    BachelorDialogComponent,
    IntershopPwaDialogComponent,
    RecommenderSystemComponent,
    PersonalWebsiteComponent,
    GithubCornerComponent,
    ScrollFabComponent,
    ScrollableSectionDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
