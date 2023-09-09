import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }
  addEmployee(data: any){
    return this.http.post<any>('http://localhost:3000/posts', data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  updateEmployee(id: number ,data: any){
    return this.http.put<any>(`http://localhost:3000/posts/${id}`, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getEmployeeList(){
    return this.http.get<any>('http://localhost:3000/posts')
    .pipe(map((res: any) => {
      return res;
    }))
  }
  deleteEmployee(id: number){
    return this.http.delete<any>(`http://localhost:3000/posts/${id}`)
     .pipe(map((res: any) => {
      return res;
     }))
  }

}
