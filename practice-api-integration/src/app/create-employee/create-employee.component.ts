import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
    public employeeForm : FormGroup = new FormGroup({
          name : new FormControl(),
          mobile : new FormControl(),
          email : new FormControl(),
          dob : new FormControl(),
          // nested Form
          address : new FormGroup({
            addressLine: new FormControl(),
            city : new FormControl(),
            state : new FormControl(),
            pincode : new FormControl(),

            // nested Form
            location : new FormGroup({
              nearby : new FormControl(),
              landmark :new FormControl()
            })
          }),

          // Form Array
          education : new FormArray([]),


          // Dynamic Form
          type: new FormControl(),
          html : new FormControl(),
          css : new FormControl(),
          javascript : new FormControl(),
          angular : new FormControl(),
          nodejs : new FormControl(),
          mongodb : new FormControl(),
          expressjs : new FormControl()
    })








    submit(){
      console.log(this.employeeForm)
    }
    //  variable assigning to Form array
    get educationdetailsarray(){
      return this.employeeForm.get('education') as FormArray
    }

    add(){
      this.educationdetailsarray.push(
        new FormGroup({
          qualification: new FormControl(),
          year: new FormControl(),
          percentage: new FormControl(),

        })
      )
    }

    delete(i:any) {
      this.educationdetailsarray.removeAt(i);
    }
}
