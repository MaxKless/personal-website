import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() label: string;
  @Input() amount: number;
  @Input() tags: string[];
  @Input() notags: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
