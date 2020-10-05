import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      nombre: 'Home',
      ruta: '/home'
    },
    {
      nombre: 'About',
      ruta: '/about'
    },
    {
      nombre: 'Contact',
      ruta: '/contact'
    },
    {
      nombre: 'Posts',
      ruta: '/posts'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
