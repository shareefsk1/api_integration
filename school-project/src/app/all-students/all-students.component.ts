import { Component } from '@angular/core';
import { StudentsDetailsApiService } from '../students-details-api.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {

  public students: any = [] ;
  public keys : any = null ;

  public column : any = null ;
  public order : any = null ;

  public keyword : any = null ;

constructor(private _service:StudentsDetailsApiService){

  _service.getStudents().subscribe(
    (data) => {
      this.students = data
      this.keys = Object.keys(data[0])
    },
    (err:any) => {
      alert('Internal Server Error')
    }
  )

}


sorted(){
  this._service.sortedStudents(this.column,this.order).subscribe(
    (data:any) => {
      this.students = data;
    }, (err:any) => {
      alert('Internal Server Error')
    }
  )
}


filter(){
  this._service.filter(this.keyword).subscribe(
    (data:any) => {
      this.students = data;
    },
    (err:any) => {
      alert('Internal server error')
    }
  )
}


pagination(page:any){
    this._service.pagination(page).subscribe(
      (data:any) => {
        this.students = data;
      },
      (err:any) => {
        alert('Internal server error')
      }
    )
}

delete(id:any){
  this._service.delete(id).subscribe(
    (data:any) => {
      alert('Deleted successfully');
      location.reload();
    },
    (err:any) => {
      alert('Internal server error')
    }
  )
}


}
