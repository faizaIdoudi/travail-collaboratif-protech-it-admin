import { Component, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeServiceService } from '../shared/employee-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../classes/employee';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-open-add-edit-emp-form',
  templateUrl: './open-add-edit-emp-form.component.html',
  styleUrls: ['./open-add-edit-emp-form.component.css']
})
export class OpenAddEditEmpFormComponent implements OnInit {
  empForm: FormGroup;
  employeeObj : Employee = new Employee();
  employeeData !: any;

  constructor(private _fb: FormBuilder ,
    private empService: EmployeeServiceService ,
    private _dialogRef: MatDialogRef<OpenAddEditEmpFormComponent>,
    @Inject( MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService){
    this.empForm = this._fb.group({
      nom: '',
      prenom: '',
      address: '',
      tel: '',
      email: '',
      password: ''
    });
    }
    ngOnInit(): void {
      this.empForm.patchValue(this.data);


    }
    onCancel() {

      this._dialogRef.close();
    }
    postEmployee() {
      this.employeeObj.nom = this.empForm.value.nom;
      this.employeeObj.prenom = this.empForm.value.prenom;
      this.employeeObj.address= this.empForm.value.address;
      this.employeeObj.tel = this.empForm.value.tel;
      this.employeeObj.email = this.empForm.value.email;
      this.employeeObj.password = this.empForm.value.password;

      if (this.empForm.valid){
        if(this.data){
          this.empService.updateEmployee(this.data.id,this.employeeObj).subscribe({ next: res=> {
            console.log(res);
            this._coreService.openSnackBar("Employé mis à jour !","Terminé")
            this._dialogRef.close(true);
          },
            error: err =>{
            alert("Something went wrong");
          }});

        }
        else {
          this.empService.addEmployee(this.employeeObj).subscribe({ next: res=> {
            console.log(res);
            this._coreService.openSnackBar("Employé ajouté avec succès","Terminé")
            this._dialogRef.close(true);
          },
            error: err =>{
            alert("Something went wrong");
          }});

        }

      }



    }
}
