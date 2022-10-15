import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  input: any;
  myInput: string = 'Initial Value';

  showDiv:boolean = true

  switchValue:string = ''

  dataList:any[] = [
    {name:'Jhon',id:'45892'},
    {name:'Doe',id:'78982'},
    {name:'Abraham',id:'896645'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isCenter(){
    return false
  }

  isLarge(){
    return true
  }

  whatAreYouTyping($event: any) {
    console.log($event)
  }

  shouldShow() {
    return this.showDiv
  }
}
