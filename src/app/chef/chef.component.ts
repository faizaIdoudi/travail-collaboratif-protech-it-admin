import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { AddChefComponent } from '../add-chef/add-chef.component';
import { ChefService } from '../shared/chef.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'address',
    'tel',
    'email',
    'specialite',
    'action'];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private _dialog: MatDialog,
    private chefService: ChefService,
    private _coreService: CoreService) { }
  ngOnInit(): void {
    this.getChefList();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddChefForm() {
    const dialogRef = this._dialog.open(AddChefComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getChefList();
        }
      }
    })

  }
  getChefList() {
    this.chefService.getChefList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
  deleteChef(id: number){
    this.chefService.deleteChef(id).subscribe({
      next: (res) =>{
        this._coreService.openSnackBar("Chef supprimé!","Terminé")
        this.getChefList();
      },
      error: (err) =>{
        console.log(err)
      }
    });
  }
  openEditForm(data: any){
    const dialogRef = this._dialog.open(AddChefComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getChefList();
        }
      }
    })
  }
}

