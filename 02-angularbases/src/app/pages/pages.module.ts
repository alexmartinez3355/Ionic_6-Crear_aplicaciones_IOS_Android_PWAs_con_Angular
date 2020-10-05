import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContantComponent } from './contant/contant.component';



@NgModule({
  declarations: [
    HomeComponent, 
    AboutComponent, 
    ContantComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContantComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
