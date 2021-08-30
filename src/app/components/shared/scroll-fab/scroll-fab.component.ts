import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BootstrapSize, ResizeService } from 'src/app/services/resize/resize.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-scroll-fab',
  templateUrl: './scroll-fab.component.html',
  styleUrls: ['./scroll-fab.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate(150, style({ opacity: 1 }))]),
      transition('* => void', [animate(150, style({ opacity: 0 }))]),
    ]),
  ],
})
export class ScrollFabComponent implements OnInit {
  isMobile$: Observable<boolean>;
  isAtPageTop$: Observable<boolean>;
  isAtPageBottom$: Observable<boolean>;

  constructor(private scrollService: ScrollService, private resizeService: ResizeService) {}

  ngOnInit() {
    this.isMobile$ = this.resizeService.size$.pipe(map((size) => size <= BootstrapSize.md));
    this.isAtPageTop$ = this.scrollService.isAtPageTop$;
    this.isAtPageBottom$ = this.scrollService.isAtPageBottom$;
  }

  scrollUpToNext() {
    this.scrollService.scrollUpToNext();
  }
  scrollDownToNext() {
    this.scrollService.scrollDownToNext();
  }
}
