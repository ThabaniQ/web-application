import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filterText: string = '';
  @Output() filterTextChanged = new EventEmitter<string>();

  onFilterTextChange() {
    this.filterTextChanged.emit(this.filterText);
  }
}
