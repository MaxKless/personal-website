import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Directive({
  selector: '[appScrollableSection]',
})
export class ScrollableSectionDirective implements AfterViewInit {
  constructor(private el: ElementRef, private scrollService: ScrollService) {}

  ngAfterViewInit() {
    this.scrollService.addSection(this.el.nativeElement);
  }
}
