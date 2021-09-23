import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { BootstrapSize, ResizeService } from 'src/app/services/resize/resize.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

const appearAnimation = [style({ opacity: 0 }), animate('1000ms ease-in', style({ opacity: 1 }))];

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss'],
  animations: [trigger('appear', [transition('false => true', appearAnimation)])],
})
export class TimelineEntryComponent implements OnInit, AfterViewInit {
  @Input() side: 'left' | 'right';
  @Input() chip: string;

  @ViewChild('entry') entry: ElementRef;

  size$: Observable<BootstrapSize>;
  hasReached$: Observable<boolean>;

  constructor(private resizeService: ResizeService, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.size$ = this.resizeService.size$;
  }

  ngAfterViewInit(): void {
    this.hasReached$ = this.scrollService.hasReachedHeight$(this.entry.nativeElement).pipe(mapTo(true));
  }
}
