import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.scss']
})
export class CardArticuloComponent implements OnInit {

  @Input() articulo;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  comprar(){
    this.router.navigateByUrl('/comprar-articulo',{ state: this.articulo });
  }

}
