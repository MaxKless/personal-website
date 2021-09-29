import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
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
  ],
})
export class HeaderComponent implements AfterViewInit {
  arrowBounce$: Subject<number> = new Subject();
  counter: number = 0;
  spacerHeight$: Observable<number>;

  @ViewChild('spacer') spacer: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.spacerHeight$ = fromEvent(window, 'resize').pipe(
      startWith(0),
      map(() => window.innerHeight - getTopY(this.spacer.nativeElement))
    );
  }

  scrollToSection(name: string) {
    document.querySelector(`#${name}`).scrollIntoView();
  }

  bounce() {
    this.arrowBounce$.next(this.counter++);
  }
}
