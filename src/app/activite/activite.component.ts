import { Component , OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddActiviteComponent } from '../add-activite/add-activite.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { CoreService } from '../core/core.service';
import { ActiviteService } from '../shared/activite.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'titre',
    'description',
    'action'
  ];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private _dialog: MatDialog ,
    private activiteService : ActiviteService,
    private _coreService: CoreService){}

  ngOnInit(): void {
    this.getActiviteList();
  }

  openAddActiviteForm() {
    const dialogRef = this._dialog.open(AddActiviteComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getActiviteList();
        }
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

  getActiviteList() {
    this.activiteService.getActiviteList().subscribe({
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

  deleteActivite(id: number){
    this.activiteService.deleteActivite(id).subscribe({
      next: (res) =>{
        this._coreService.openSnackBar("Activité supprimé!","Terminé")
        this.getActiviteList();
      },
      error: (err) =>{
        console.log(err)
      }
    });
  }

  openEditForm(data: any){
    const dialogRef = this._dialog.open(AddActiviteComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getActiviteList();
        }
      }
    })
  }

}
