import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  info: any;
  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true},
    {headerName: 'Name', field: 'oname', sortable: true},
    {headerName: 'Phone', field: 'phone', sortable: true},
    {headerName: 'Created At', field: 'createdAt', sortable: true},
    {headerName: 'Updated At', field: 'updatedAt', sortable: true}
  ];

  rowData: any;

  gridOptions = {
    pagination: true,
    paginationPageSize: 5,
    defaultColDef: {
      width: 200
    },
    
  };

  constructor(private crudService: CrudService, private http: HttpClient) { }

  ngOnInit() {
    this.getInfo();
    //this.rowData = this.http.get('http://localhost:8080/info');
    this.rowData = this.crudService.getAll();
    
  }
  
  

  getInfo() {
    this.crudService.getAll()
      .subscribe(
        data => {
          this.info=data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  

}
