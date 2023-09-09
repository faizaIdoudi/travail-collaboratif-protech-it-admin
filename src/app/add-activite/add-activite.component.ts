import { Component ,Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { Activite } from '../classes/activite';
import { ActiviteService } from '../shared/activite.service';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit{
  empForm !: FormGroup;
  activiteObj : Activite = new Activite();
  activiteData !: any;

  constructor(private _fb: FormBuilder ,
    private activiteService : ActiviteService,
    private _dialogRef: MatDialogRef<AddActiviteComponent>,
    @Inject( MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService){
      this.empForm = this._fb.group({
        titre: '',
        description: ''
      });
    }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onCancel() {
    this._dialogRef.close();
  }
  postActivite(){
    this.activiteObj.titre = this.empForm.value.titre;
    this.activiteObj.description = this.empForm.value.description;

    if (this.empForm.valid){
      if (this.data){
        this.activiteService.updateActivite(this.data.id,this.activiteObj).subscribe({
          next: res => {
            console.log(res);
            this._coreService.openSnackBar("Activité mis à jour !", "Terminé")
            this._dialogRef.close(true);
          },
          error: err =>{
            alert("Something went wrong");
          }
        });
      }
      else {
        this.activiteService.addActivite(this.activiteObj).subscribe({
          next: res =>{
            console.log(res);
            this._coreService.openSnackBar("Activité ajouté avec succès", "Terminé")
            this._dialogRef.close(true);
          },
          error: err =>{
            alert("Something went wrong");
          }
        });
      }
    }
  }

}
