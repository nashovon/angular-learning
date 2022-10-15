import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  bookList:any[] = []

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){

    console.log('Before calling api')

    this.bookService.getBooks().subscribe(res=>{

      console.log(res)

      this.bookList = res.data['202224'].forecast_data.temp

      console.log('booklist  ',this.bookList)

    },error => {

      // catch error

      console.log(error)

    })

    console.log('Api calling finished')
  }



}
