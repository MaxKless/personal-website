import { HostListener, Injectable, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  fromEvent,
  merge,
  Observable,
  of,
  Subject,
} from 'rxjs';
import {
  distinctUntilChanged,
  map,
  startWith,
  tap,
  windowTime,
} from 'rxjs/operators';

export enum BootstrapSize {
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
}

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  private sizeSubject$ = new BehaviorSubject<BootstrapSize>(
    mapToBootstrapSize(window.innerWidth)
  );
  public size$: Observable<BootstrapSize>;
  constructor() {
    this.size$ = this.sizeSubject$.asObservable();
    fromEvent(window, 'resize')
      .pipe(
        map(() => window.innerWidth),
        map(mapToBootstrapSize),
        distinctUntilChanged(),
      )
      .subscribe((size) => this.sizeSubject$.next(size));
  }
}

function mapToBootstrapSize(size: number): BootstrapSize {
  if (size >= 1400) {
    return BootstrapSize.xxl;
  }
  if (size >= 1200) {
    return BootstrapSize.xl;
  }
  if (size >= 992) {
    return BootstrapSize.lg;
  }
  if (size >= 768) {
    return BootstrapSize.md;
  }
  if (size >= 576) {
    return BootstrapSize.sm;
  }
  return BootstrapSize.xs;
}
