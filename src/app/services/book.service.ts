import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }


  getBooks(){
    // observable
    return this.httpClient.get<any>('https://api.bdservers.site/upazila_forecast_recent?SOURCE=BMDWRF&PARAM=temp&PCODE=202224')
  }

  createNewBook(){
    return this.httpClient.post('new book url',{})
  }

  updateBook(){
    return this.httpClient.put('update url',{})
  }

  deleteBook(){
    return this.httpClient.delete('delete url')
  }

  isAdmin(){

  }

  // logic
}
