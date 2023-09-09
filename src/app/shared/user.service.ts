import { Injectable } from '@angular/core';
import {  Firestore, collection, query, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from '../classes/employee';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore,) { }

 getAllUsers$(): Observable<Employee[]> {
    const ref = collection(this.firestore, 'users');
    const queryAll =query(ref);
    return collectionData(queryAll) as Observable<Employee[]>;
  }
}
