import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
   console.log('Cargando siguientes....');
   setTimeout(() => {
    const nuevoArr = Array(20);
    this.data.push(...nuevoArr);
    event.target.complete();

    if (this.data.length > 127) {
      this.infiniteScroll.disabled=true;
      /* event.target.disabled = true; */
    }
   }, 200);
  }

}
