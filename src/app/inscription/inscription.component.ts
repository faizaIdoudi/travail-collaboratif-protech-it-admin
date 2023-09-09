import { Component , OnInit} from '@angular/core';
import { FormGroup , FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  public signupForm !: FormGroup;
  constructor(private formBuilder: FormBuilder ,
    private http: HttpClient,
    private router: Router,
    private _coreService: CoreService){}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      adresse: '',
      tel: '',
      email: '',
      password: ''
    })
  }
  signUp(){
    this.http.post<any>('http://localhost:3000/signup',this.signupForm.value)
    .subscribe(res => {
      this._coreService.openSnackBar("Inscription réussie!" , "Terminé");
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err =>{
      alert("Erreur d'inscription");
    })
  }

}
