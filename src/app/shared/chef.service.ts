import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  constructor(private http: HttpClient) { }
  addChef(data: any){
    return this.http.post<any>('http://localhost:3000/chefs', data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  updateChef(id: number ,data: any){
    return this.http.put<any>(`http://localhost:3000/chefs/${id}`, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getChefList(){
    return this.http.get<any>('http://localhost:3000/chefs')
    .pipe(map((res: any) => {
      return res;
    }))
  }
  deleteChef(id: number){
    return this.http.delete<any>(`http://localhost:3000/chefs/${id}`)
     .pipe(map((res: any) => {
      return res;
     }))
  }

}
