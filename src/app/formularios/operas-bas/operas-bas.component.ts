import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1='';
  num2='';
  resultado:number=0;
  res:number=0;
  check(operador:string):number{
    switch(operador){
      case 'suma':
        this.res=parseInt(this.num1)+parseInt(this.num2);
        break;
      case 'rest':
        this.res=parseInt(this.num1)-parseInt(this.num2);
        break;
      case 'mult':
        this.res=parseInt(this.num1)*parseInt(this.num2);
        break;
      case 'divi':
        this.res=parseInt(this.num1)/parseInt(this.num2);
        break;
      default:
    }
    return this.res;
  }
  mostrarResultado(){
    this.resultado=this.res;
  }
  /* sumar(){
    this.res = parseInt(this.num1)+parseInt(this.num2);
  }
  resta(){
    this.res = parseInt(this.num1)-parseInt(this.num2);
  }
  multi(){
    this.res = parseInt(this.num1)*parseInt(this.num2);
  }
  div(){
    this.res = parseFloat(this.num1)/parseFloat(this.num2);
  } */
}
