import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImagen:boolean=true;
  listFilter:string='';

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2020",
      "precio":120000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "imagenUrl":"https://img.automexico.com/2018/12/22/1eae7dae-b-571d.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "year":"marzo 5 2022",
      "precio":180000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://images.kavak.services/images/272399/EXTERIOR-frontSidePilotNear-1692458338673.jpeg?d=540x310"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"Enero 2 2023",
      "precio":200000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://www.ziga.mx/inventoryphotos/9965/3kpa24ac8le306048/ip/1.jpg?width=480&bg-color=FFFFFF"
    }
  ]

}
