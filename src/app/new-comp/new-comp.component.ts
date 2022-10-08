import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  @Input() title!:string


  constructor() { }

  // lifecycle hooks
  ngOnInit(): void {
    this.title = 'This value is set from component class'
    // this.buttonClickedEvent('Method called from ngOnInit')
  }


  buttonClickedEvent(type:string){
    console.log(type)
    // this.title = 'Value Changed'
  }

}
