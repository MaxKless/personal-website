import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-tag-list',
  templateUrl: './chip-tag-list.component.html',
  styleUrls: ['./chip-tag-list.component.scss'],
})
export class ChipTagListComponent {
  @Input() tags: string[];
  constructor() {}

}
