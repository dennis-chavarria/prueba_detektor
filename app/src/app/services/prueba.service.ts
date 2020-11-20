import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})


export class MotivosService{
  url:String='http://localhost/DennisChavarria/api/request';
  constructor(private http : HttpClient){
	}

	obtenerMotivos () {
		return this.http.post(`${this.url}/prueba.php`, {},
    {responseType: 'text'}).pipe(
    map((res) => {
      return res;
  	})
	)

	}

	saveCategory (_category:any) {
		return this.http.post(`${this.url}/products/category`, {category:_category});
	}

}
