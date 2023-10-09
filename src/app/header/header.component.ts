import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  filterText: string = '';
  @Output() filterTextChanged = new EventEmitter<string>();

  onFilterTextChange() {
    this.filterTextChanged.emit(this.filterText);
  }
}
