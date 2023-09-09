import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chef } from '../classes/chef';
import { ChefService } from '../shared/chef.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  empForm !: FormGroup;
  chefObj: Chef = new Chef();
  chefData !: any;
  constructor(private _fb: FormBuilder,
    private chefService: ChefService,
    private _dialogRef: MatDialogRef<AddChefComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {
    this.empForm = this._fb.group({
      nom: '',
      prenom: '',
      address: '',
      tel: '',
      email: '',
      password: '',
      specialite: ''
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);


  }

  onCancel() {

    this._dialogRef.close();
  }

  postChef() {
    this.chefObj.nom = this.empForm.value.nom;
    this.chefObj.prenom = this.empForm.value.prenom;
    this.chefObj.address = this.empForm.value.address;
    this.chefObj.tel = this.empForm.value.tel;
    this.chefObj.email = this.empForm.value.email;
    this.chefObj.password = this.empForm.value.password;
    this.chefObj.specialite = this.empForm.value.specialite;

    if (this.empForm.valid) {
      if (this.data) {
        this.chefService.updateChef(this.data.id, this.chefObj).subscribe({
          next: res => {
            console.log(res);
            this._coreService.openSnackBar("Chef mis à jour !", "Terminé")
            this._dialogRef.close(true);
          },
          error: err => {
            alert("Something went wrong");
          }
        });

      }
      else {
        this.chefService.addChef(this.chefObj).subscribe({
          next: res => {
            console.log(res);
            this._coreService.openSnackBar("Chef ajouté avec succès", "Terminé")
            this._dialogRef.close(true);
          },
          error: err => {
            alert("Something went wrong");
          }
        });

      }
    }
  }


}
