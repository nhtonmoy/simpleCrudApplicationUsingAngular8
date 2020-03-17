import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component'

import { FormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';

import { AgGridModule } from 'ag-grid-angular';
import { CrudService } from './services/crud.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailComponent,
    UploadComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [EmployeeService, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
