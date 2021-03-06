import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';
import { ScrollService } from 'src/app/services/scroll/scroll.service';
import { getTopY } from '../../../helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('downUp', [
      transition(':increment', [
        animate('1000ms ease-out', style({ transform: 'translateY(0)' })),
        animate('1000ms ease-in', style({ transform: 'translateY(20px)' })),
      ]),
    ]),
    trigger('textFadeIn', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('50ms', [animate('400ms ease-in-out'), style({ opacity: 1, transform: 'translateY(0)' })]),
        ]),
      ]),
    ]),
    trigger('toolbarFade', [
      state(
        'true',
        style({
          transform: 'translateY(0)',
        })
      ),
      state(
        'false',
        style({
          transform: 'translateY(-100px)',
        })
      ),
      transition('false => true', animate('400ms ease-out')),
      transition('true => false', animate('400ms ease-in')),
    ]),
  ],
})
export class HeaderComponent implements AfterViewInit {
  @Output() openSidenavEmitter = new EventEmitter<boolean>();

  arrowBounce$: Subject<number> = new Subject();
  counter: number = 0;
  spacerHeight$: Observable<number>;
  showHeader$: Observable<boolean>;

  dissapearOffset = 85;

  @ViewChild('spacer') spacer: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.showHeader$ = fromEvent(window, 'scroll').pipe(
      map(() => window.scrollY),
      pairwise(),
      map(([prev, cur]) => prev > cur || cur < this.dissapearOffset),
      startWith(true),
      distinctUntilChanged()
    );
    this.spacerHeight$ = fromEvent(window, 'resize').pipe(
      startWith(window.scrollY < this.dissapearOffset),
      map(() => window.innerHeight - getTopY(this.spacer.nativeElement))
    );
  }

  scrollToSection(name: string) {
    this.scrollService.scrollToSection(name);
  }

  bounce() {
    this.arrowBounce$.next(this.counter++);
  }

  openSidenav() {
    this.openSidenavEmitter.emit(true);
  }
}
