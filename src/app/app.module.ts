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
import { EducationComponent } from './components/education/education.component';
import { TimelineEntryComponent } from './components/education/timeline-entry/timeline-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    EducationComponent,
    TimelineEntryComponent,
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
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
