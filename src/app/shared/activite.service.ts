import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient) { }

  addActivite(data: any){
    return this.http.post<any>('http://localhost:3000/activite', data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  updateActivite(id: number ,data: any){
    return this.http.put<any>(`http://localhost:3000/activite/${id}`, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getActiviteList(){
    return this.http.get<any>('http://localhost:3000/activite')
    .pipe(map((res: any) => {
      return res;
    }))
  }

  deleteActivite(id: number){
    return this.http.delete<any>(`http://localhost:3000/activite/${id}`)
     .pipe(map((res: any) => {
      return res;
     }))
  }
}
