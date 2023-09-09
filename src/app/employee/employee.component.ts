import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenAddEditEmpFormComponent } from '../open-add-edit-emp-form/open-add-edit-emp-form.component';
import { EmployeeServiceService } from '../shared/employee-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreService } from '../core/core.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'address',
    'tel',
    'email',
    'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private _dialog: MatDialog ,
    private empService: EmployeeServiceService,
    private _coreService: CoreService){

  }
  ngOnInit(): void {
    this.getEmployeeList();
  }
  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(OpenAddEditEmpFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getEmployeeList();
        }
      }
    })

  }
  getEmployeeList(){
    this.empService.getEmployeeList().subscribe({
      next: (res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id: number){
    this.empService.deleteEmployee(id).subscribe({
      next: (res) =>{
        this._coreService.openSnackBar("Employé supprimé avec succès","Terminé")
        this.getEmployeeList();

      },
      error: (err) => {
        console.log(err)
      }
    });
  }
  openEditForm(data: any){
    const dialogRef = this._dialog.open(OpenAddEditEmpFormComponent , {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getEmployeeList();
        }
      }
  })}

}
