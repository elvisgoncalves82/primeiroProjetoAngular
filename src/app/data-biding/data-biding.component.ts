import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = 'http://https://loiane.training.com';
  teste: boolean = true;
  imagem = "http://lorempixel.com.br/400/200/nature"

  getValor(){
    return 1;
  }

  getCurtir(){
    return true;
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
