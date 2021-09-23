import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { concat, Observable, of, timer } from 'rxjs';
import { map, startWith, switchMapTo, take } from 'rxjs/operators';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent implements AfterViewInit {
  @Input() label: string;
  @Input() amount: number;
  @Input() tags: string[];
  @Input() notags: boolean;

  chargingAmount: Observable<number>;

  @ViewChild(MatProgressBar) progressBar: MatProgressBar;

  constructor(private scrollService: ScrollService) {}

  ngAfterViewInit(): void {
    const time = 1;
    const updatesPerSecond = 15;

    this.chargingAmount = concat(
      of(0),
      this.scrollService.hasReachedHeight$(this.progressBar._elementRef.nativeElement).pipe(
        switchMapTo(
          timer(0, (1000 * time) / updatesPerSecond).pipe(
            startWith(0),
            map((e) => (e * this.amount) / (time * updatesPerSecond)),
            take(time * updatesPerSecond + 1)
          )
        )
      )
    );
  }
}
