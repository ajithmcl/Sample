import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  name: string= "jbkefv"
  inputText: string = "dghtrh";
  value: string = "1";
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    console.log("clicked")
  }

}
