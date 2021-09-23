import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith, take } from 'rxjs/operators';
import { getTopY, pageBottomHeight, reverseFind } from 'src/app/helpers';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  isAtPageTop$: Observable<boolean>;
  isAtPageBottom$: Observable<boolean>;

  private sections: Record<number, Element> = {};
  private sortedPositions: number[];
  private scrollObservable;

  // magic offsets
  private offsetTop = 150;
  private offsetBottom = 50;

  constructor() {
    this.scrollObservable = fromEvent(window, 'scroll');
    this.isAtPageTop$ = this.scrollObservable.pipe(
      startWith(0),
      map(() => window.scrollY <= this.offsetTop),
      distinctUntilChanged()
    );
    this.isAtPageBottom$ = this.scrollObservable.pipe(
      startWith(0),
      map(() => pageBottomHeight() >= document.body.scrollHeight - this.offsetBottom),
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

  hasReachedHeight$(element: Element): Observable<boolean> {
    const topY = getTopY(element);
    return this.scrollObservable.pipe(
      startWith(0),
      filter(() => Math.ceil(window.innerHeight + window.scrollY) >= topY),
      take(1)
    );
  }

  addSection(element: Element) {
    const topY = getTopY(element);
    this.sections[topY] = element;
    this.sortedPositions = Object.keys(this.sections)
      .map((keyString) => parseInt(keyString))
      .sort((n1, n2) => n1 - n2);
  }

  private;
}
