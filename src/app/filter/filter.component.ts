import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input() all: number = 0
  @Input() str: number = 0
  @Input() agi: number = 0
  @Input() int: number = 0

  selectedInputValue: string = 'All'

  @Output() filterSelectedInputValue: EventEmitter<string> = new EventEmitter<string>()

  onChangeFilterSelectedInputValue(){
    this.filterSelectedInputValue.emit(this.selectedInputValue)
    // console.log(this.selectedInputValue)
  }

}
