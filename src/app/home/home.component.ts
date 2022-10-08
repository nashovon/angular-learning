import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // dependency injection
  constructor(
    private routeInfo: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.routeInfo.queryParams.subscribe(res=>{
      console.log(res['user'])
      console.log(res['password'])
    })

  }

}
