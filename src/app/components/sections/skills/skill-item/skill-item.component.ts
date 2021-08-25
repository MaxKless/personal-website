import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent {
  @Input() label: string;
  @Input() amount: number;
  @Input() tags: string[];
  @Input() notags: boolean;

  constructor() {}
}
