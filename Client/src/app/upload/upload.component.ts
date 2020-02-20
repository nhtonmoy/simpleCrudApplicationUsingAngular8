import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  info = {
    oname: '',
    phone: ''
  };
  submitted = false;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    
  }


  onSubmit(){
    const data = {
      oname: this.info.oname,
      phone: this.info.phone
    };

    this.crudService.create(data)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error);
        });
        this.submitted=true;
    //alert(formData.oname +' '+ formData.phone);
  }
  addNew(){
    this.submitted=false;
    this.info = {
      oname: '',
      phone: ''
    };
  }
}
