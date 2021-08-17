import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  public isDarkMode$: Observable<boolean>;
  private darkModeSubject$ = new BehaviorSubject(false);
  constructor() {
    this.isDarkMode$ = this.darkModeSubject$.asObservable().pipe(shareReplay(1));

    if (window.matchMedia) {
      this.darkModeSubject$.next(window.matchMedia('(prefers-color-scheme: dark)').matches);
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.darkModeSubject$.next(e.matches);
      });
    }
  }
}
