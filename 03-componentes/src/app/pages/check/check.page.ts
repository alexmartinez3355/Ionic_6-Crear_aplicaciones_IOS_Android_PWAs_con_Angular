import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false 
    },
    {
      name: 'success',
      selected: true 
    },
    {
      name: 'warning',
      selected: false 
    },
    {
      name: 'danger',
      selected: true 
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  onClick(check){
    console.log(check);
  }

}
