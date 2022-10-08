import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewCompComponent} from "./new-comp/new-comp.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'new-comp-url' , component:NewCompComponent},
  {
    path: 'home' ,
    title : 'Website Home',
    component:HomeComponent,
    children:
      [
        {path: 'new-comp-url' , component:NewCompComponent}
     ]
  },
  {path: '' , redirectTo:'/home' , pathMatch:'full'},

  {path: 'dashboard' , component:DashboardComponent,title:'Graphs'},

  // wildcard
  {path: '**' , component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
