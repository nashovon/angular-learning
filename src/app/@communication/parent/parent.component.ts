import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit,OnDestroy {

  @ViewChild(ChildComponent) childRef!:ChildComponent;

  currentTime:number = 1666934733

  constructor() { }

  ngOnInit(): void {
    console.log('View is not initialized yet')
  }

  ngAfterViewInit(): void {
    console.log('View initialized')
  }

  ngOnDestroy(): void {
    console.log('parent component destroyed')
  }

  showCaughtSignal(event:String){
    console.log(event)
  }

  invokeChildMethod() {
    this.childRef.sendClickEvent()
  }


  formatTime(timeStamp:number){
    return timeStamp.toString()
  }


}
