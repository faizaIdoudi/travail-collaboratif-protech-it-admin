import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTacheComponent } from '../add-tache/add-tache.component';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { CoreService } from '../core/core.service';
import { TacheService } from '../shared/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'libelle',
    'description',
    'action'
  ];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private _dialog: MatDialog,
    private tacheService: TacheService,
    private _coreService: CoreService){}

    ngOnInit(): void { this.getTacheList();}

  openAddTacheForm() {
    const dialogRef = this._dialog.open(AddTacheComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTacheList();
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


  getTacheList() {
    this.tacheService.getTacheList().subscribe({
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


  deleteTache(id: number){
    this.tacheService.deleteTache(id).subscribe({
      next: (res) =>{
        this._coreService.openSnackBar("Tache supprimé!","Terminé")
        this.getTacheList();
      },
      error: (err) =>{
        console.log(err)
      }
    });
  }

  openEditForm(data: any){
    const dialogRef = this._dialog.open(AddTacheComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) =>{
        if (val){
          this.getTacheList();
        }
      }
    })
  }

}
