import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss'],
})
export class SidenavMenuComponent {
  @Output() closeSidenavEmitter = new EventEmitter<boolean>();

  constructor(private scrollService: ScrollService) {}

  closeSidenav() {
    this.closeSidenavEmitter.emit(true);
  }

  scrollToSection(name: string) {
    this.scrollService.scrollToSection(name);
    this.closeSidenav();
  }
}
