import {Component} from '@angular/core';
import { MotivosService } from '../services/prueba.service';

@Component({
  templateUrl: 'prueba.component.html',
  providers:[],
})

export class Prueba{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  motivos=[];

  constructor(private _motivosService:MotivosService){

  }

  ngOnInit(){
    this.obtenerMotivos();
  }

  obtenerMotivos(){
      let d=this._motivosService.obtenerMotivos().subscribe(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log(err)
        }
      );
  }
}
