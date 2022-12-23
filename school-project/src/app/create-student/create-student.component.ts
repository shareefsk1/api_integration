import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

      public studentForm: FormGroup = new FormGroup({
        name : new FormControl(),
        fathername : new FormControl(),
        class : new FormControl(),
        dob : new FormControl(),

        // nested Form

        adderess : new FormGroup({
          addressline: new FormControl(),
          city: new FormControl(),
          state: new FormControl(),
          pincode: new FormControl(null,[Validators.required, Validators.min(100000), Validators.max(999999)] )

        }),
        //  Form Array
        marks: new FormArray([]),
        
        // Dynamic Form
        type: new FormControl(),
        busfee: new FormControl(),
        hostelfee: new FormControl()

      })



      submit(){
        console.log(this.studentForm)
      }

      get marksarray(){
        return this.studentForm.get('marks') as FormArray ;
      }


      add(){
        this.marksarray.push(
          new FormGroup({
            class: new FormControl(),
            year: new FormControl(),
            percentage: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)])
          })
        )
      }

      delete(i:any){
        this.marksarray.removeAt(i)
      }
        
}
