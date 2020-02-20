import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
//import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  info: any;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.getInfo();
    var i;
    
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
