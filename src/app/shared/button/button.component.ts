import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnContent: any;
  @Output() action: EventEmitter<any> = new EventEmitter()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnAction(event) {
    this.action.emit(event);
    if(event.action == "navigate") {
      this.router.navigate([event.url])
    }
  }

}
