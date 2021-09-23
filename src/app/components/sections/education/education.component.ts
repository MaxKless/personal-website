import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('unroll', [
      transition('false => true', [style({ height: '0%' }), animate('1000ms ease-in', style({ height: '100%' }))]),
    ]),
  ],
})
export class EducationComponent implements AfterViewInit {
  hasReached$: Observable<boolean>;

  @ViewChild('circle_icon') circleIcon: ElementRef;
  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.hasReached$ = this.scrollService.hasReachedHeight$(this.circleIcon.nativeElement).pipe(mapTo(true));
  }
}
