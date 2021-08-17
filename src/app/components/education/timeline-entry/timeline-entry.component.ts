import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BootstrapSize, ResizeService } from 'src/app/services/resize/resize.service';

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss']
})
export class TimelineEntryComponent implements OnInit {

  @Input() side: 'left' | 'right';
  @Input() chip: string;
  size$ : Observable<BootstrapSize>;
  constructor(private resizeService: ResizeService) { }

  ngOnInit(): void {
     this.size$ = this.resizeService.size$;
  }

}
