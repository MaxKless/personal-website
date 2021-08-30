import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { reverseFind } from 'src/app/helpers';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  isAtPageTop$: Observable<boolean>;
  isAtPageBottom$: Observable<boolean>;

  private sections: Record<number, Element> = {};
  private sortedPositions: number[];

  // magic offsets
  private offsetTop = 150;
  private offsetBottom = 50;

  constructor() {
    const scrollObservable = fromEvent(window, 'scroll');
    this.isAtPageTop$ = scrollObservable.pipe(
      startWith(0),
      map(() => window.scrollY <= this.offsetTop),
      distinctUntilChanged()
    );
    this.isAtPageBottom$ = scrollObservable.pipe(
      startWith(0),
      map(() => Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight - this.offsetBottom),
      distinctUntilChanged()
    );
  }

  scrollDownToNext() {
    const currentY = Math.round(window.pageYOffset);
    const nextSectionY = this.sortedPositions.find((pos) => currentY < pos);
    if (nextSectionY) {
      this.sections[nextSectionY].scrollIntoView();
      return;
    }
    document.getElementById('copyright').scrollIntoView();
  }

  scrollUpToNext() {
    const currentY = Math.round(window.pageYOffset);
    const prevSectionY = reverseFind(this.sortedPositions, (n) => n < currentY);
    console.log(currentY, prevSectionY);
    console.log(this.sortedPositions);

    if (prevSectionY) {
      this.sections[prevSectionY].scrollIntoView();
      return;
    }
    document.documentElement.scrollIntoView();
  }

  addSection(element: Element) {
    const topY = Math.round(
      Math.abs(document.documentElement.getBoundingClientRect().top - element.getBoundingClientRect().top)
    );
    this.sections[topY] = element;
    this.sortedPositions = Object.keys(this.sections)
      .map((keyString) => parseInt(keyString))
      .sort((n1, n2) => n1 - n2);
  }
}
