import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('appear', [
      transition('false => true', [
        query('.project', [
          style({ opacity: 0 }),
          stagger('150ms', [animate('500ms 200ms ease-in'), style({ opacity: 1 })]),
        ]),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements AfterViewInit {
  hasReached$: Observable<boolean>;

  @ViewChild('sectionHeader') sectionHeader: ElementRef;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    this.hasReached$ = this.scrollService.hasReachedHeight$(this.sectionHeader.nativeElement).pipe(mapTo(true));
  }
}
