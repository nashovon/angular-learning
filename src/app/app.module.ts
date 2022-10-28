import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import {BookService} from "./book.service";
import { BookListComponent } from './book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './@communication/parent/parent.component';
import { ChildComponent } from './@communication/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    BookListComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
