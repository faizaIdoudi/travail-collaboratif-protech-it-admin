import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private http: HttpClient) { }

  addTache(data: any){
    return this.http.post<any>('http://localhost:3000/taches', data)
    .pipe(map((res: any) => {
      return res;
    }))
  }


  updateTache(id: number ,data: any){
    return this.http.put<any>(`http://localhost:3000/taches/${id}`, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }


  getTacheList(){
    return this.http.get<any>('http://localhost:3000/taches')
    .pipe(map((res: any) => {
      return res;
    }))
  }


  deleteTache(id: number){
    return this.http.delete<any>(`http://localhost:3000/taches/${id}`)
     .pipe(map((res: any) => {
      return res;
     }))
  }
}
