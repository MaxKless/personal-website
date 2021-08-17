import { Component, OnInit } from '@angular/core';
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

  constructor(private darkmode: DarkmodeService) {}

  ngOnInit() {
    this.darkMode$ = this.darkmode.isDarkMode$;
  }
}
