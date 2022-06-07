import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checkboxContent;
  @Output() emitCheckBox: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    if(this.checkboxContent.checked) {
      this.emitCheckBox.emit({...this.checkboxContent })
    }
  }

  changeCheckbox(event, data) {
      this.emitCheckBox.emit({...data, checked: event.target.checked})
  }

}
