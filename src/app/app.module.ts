import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EducationComponent } from './components/education/education.component';
import { TimelineEntryComponent } from './components/education/timeline-entry/timeline-entry.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillItemComponent } from './components/skills/skill-item/skill-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BachelorComponent } from './components/projects/bachelor/bachelor.component';
import { ChipTagListComponent } from './components/shared/chip-tag-list/chip-tag-list.component';
import { IntershopPwaComponent } from './components/projects/intershop-pwa/intershop-pwa.component';
import { BachelorDialogComponent } from './components/projects/bachelor/bachelor-dialog/bachelor-dialog.component';

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
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
