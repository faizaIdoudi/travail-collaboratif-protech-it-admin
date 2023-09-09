import { Component ,Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tache } from '../classes/tache';
import { TacheService } from '../shared/tache.service';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {
  empForm !: FormGroup;
  tacheObj : Tache = new Tache();
  TacheData !: any;

  constructor(private _fb: FormBuilder ,
    private tacheService : TacheService,
    private _dialogRef: MatDialogRef<AddTacheComponent>,
    @Inject( MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService){
      this.empForm = this._fb.group({
        libelle:'',
        description:''
      });
    }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
  onCancel() {
    this._dialogRef.close();
  }
  postTache(){
    this.tacheObj.libelle =this.empForm.value.libelle;
    this.tacheObj.description = this.empForm.value.description;

    if (this.empForm.valid) {
      if (this.data) {
        this.tacheService.updateTache(this.data.id, this.tacheObj).subscribe({
          next: res => {
            console.log(res);
            this._coreService.openSnackBar("Tache mis à jour !", "Terminé")
            this._dialogRef.close(true);
          },
          error: err => {
            alert("Something went wrong");
          }
        });

      }
      else {
        this.tacheService.addTache(this.tacheObj).subscribe({
          next: res => {
            console.log(res);
            this._coreService.openSnackBar("Tache ajouté avec succès", "Terminé")
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
