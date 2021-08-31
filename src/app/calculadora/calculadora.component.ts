import { Component, OnInit } from '@angular/core';
import { Calculo } from '../calculo';
import { faDollarSign, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  faCoffee = faUserFriends;
  faPeso = faDollarSign;
  model=new Calculo(0,0,1,0,0,0);

  constructor() { }

  ngOnInit(): void {
  }

  sumar()
  {
    var totalComida:number= Number(this.model.total);
    var propina:number=Number(this.model.propina);
    var npersonas:number= Number(this.model.nPersonas);

    var totalPropina:number =  (totalComida * propina)/100;
    this.model.tPropina = totalPropina;
    this.model.perPropina =totalPropina / npersonas;
    this.model.cuentaPagar=totalComida + totalPropina;
      
  }

  asignar(event: any)
  {
    this.model.propina = event.target.value;
    this.sumar();
  }

  limpiar()
  {

    this.model.total =0;
    this.model.propina=0;
    this.model.nPersonas=1;
    this.model.tPropina = 0;
    this.model.perPropina =0;
    this.model.cuentaPagar=0;
    (<HTMLInputElement>document.getElementById("porPersonalizado")).value="";
  }
}
