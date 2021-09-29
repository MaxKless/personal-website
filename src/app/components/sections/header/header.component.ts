import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('downUp', [
      transition(':increment', [
        animate('1000ms ease-in', style({ transform: 'translateY(25px)' })),
        animate('1000ms ease-out', style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  arrowBounce$: Subject<number> = new Subject();
  counter: number = 0;
  constructor() {}

  scrollToSection(name: string) {
    document.querySelector(`#${name}`).scrollIntoView();
  }

  bounce() {
    this.arrowBounce$.next(this.counter++);
  }
}
