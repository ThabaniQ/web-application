import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ScrollService } from '../shared-components/scroll.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filterText: string = '';
  @Output() filterTextChanged = new EventEmitter<string>();
  constructor(private scrollService: ScrollService) {}

  scrollTo(targetId: string) {
    this.scrollService.scrollTo(targetId);
  }

  onFilterTextChange() {
    this.filterTextChanged.emit(this.filterText);
  }
}

