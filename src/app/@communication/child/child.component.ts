import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'child-of-parent',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() textToView:string = 'Initial'

  @Output() clicked = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  sendClickEvent(){
    this.clicked.emit('Click event from child')
  }
}
