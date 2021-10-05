import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { DarkmodeService } from './services/darkmode/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'personal-website';
  darkMode$: Observable<boolean>;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private darkmode: DarkmodeService) {}

  ngOnInit() {
    this.darkMode$ = this.darkmode.isDarkMode$;
    this.keepFaviconUpdated();
  }

  keepFaviconUpdated() {
    const faviconElement: HTMLLinkElement = document.querySelector('#favicon');
    this.darkMode$.subscribe((dm) => {
      faviconElement.href = dm ? './assets/favicon_dark.ico' : './assets/favicon.ico';
    });
  }

  openSidenav() {
    this.sidenav.open();
  }

  closeSidenav() {
    this.sidenav.close();
  }
}
