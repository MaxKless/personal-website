import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss']
})
export class TimelineEntryComponent implements OnInit {

  @Input() side: 'left' | 'right';
  @Input() chip: string;
  constructor() { }

  ngOnInit(): void {
  }

}
