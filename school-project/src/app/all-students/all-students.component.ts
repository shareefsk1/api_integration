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



}
