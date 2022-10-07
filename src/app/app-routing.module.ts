import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewCompComponent} from "./new-comp/new-comp.component";

// sets up routes constant where you define your routes
const routes: Routes = [
  {path: 'new-comp-url' , component:NewCompComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
