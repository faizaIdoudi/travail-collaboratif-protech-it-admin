import { Component ,OnInit } from '@angular/core';
import { AdminAuthService } from '../shared/admin-auth.service';
import {FormBuilder , FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CoreService } from '../core/core.service';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{

  public loginForm !: FormGroup;
  isSignUp = false;
  nom: any;
  prenom: any;
  adresse: any;
  tel: any;
  email: any;
  password: any;

constructor(private authService: AdminAuthService,
  private formBuilder : FormBuilder,
  private http: HttpClient,
  private router: Router,
  private _coreService: CoreService){}
toggleSignUp() {
  this.isSignUp = !this.isSignUp;
}
onSubmit() {
  if (this.isSignUp) {
    this.authService.signup(
      this.nom,
      this.prenom,
      this.adresse,
      this.tel,
      this.email,
      this.password
    ).subscribe(/* Gérer la réponse */);
  } else {
    this.authService.login(
      this.email,
      this.password
    ).subscribe(/* Gérer la réponse */);
  }
}
 ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })

  }
  login(){
    this.http.get<any>('http://localhost:3000/signup')
    .subscribe(res =>{
      const user = res.find((a:any)=> {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(user){
        this.loginForm.reset();
        this.router.navigate(['/accueil']);
      }else{
        this._coreService.openSnackBar("Utilisateur non trouvé!" , "OK");
      }
    }, err =>{
      alert("Erreur de connexion")
    })

  }

}
