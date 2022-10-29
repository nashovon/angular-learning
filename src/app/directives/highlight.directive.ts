import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input() highlightColor !:string

  constructor(private el:ElementRef) {

  }

  ngOnInit(): void {
    console.log(this.highlightColor,this.el.nativeElement)

    this.el.nativeElement.style.backgroundColor = this.highlightColor
    // document.getElementById('id')
    //   .style.backgroundColor = 'yellow'

  }

}
