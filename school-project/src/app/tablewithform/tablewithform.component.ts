import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tablewithform',
  templateUrl: './tablewithform.component.html',
  styleUrls: ['./tablewithform.component.css']
})
export class TablewithformComponent {

  public studentForm : FormGroup;

  public studentData: any = []
  public submitted = false ;

  constructor(private _formBuilder:FormBuilder){
      this.studentForm = _formBuilder.group({
        name:['', [Validators.required, Validators.minLength(3)]]  ,
        fathername:['', [Validators.required, Validators.minLength(3)]]  ,
        number:['', [Validators.required, Validators.min(3)]],
        class: ['', [Validators.required, Validators.minLength(3)]],
      })
  }

  submit(){
    this.studentData.push(this.studentForm.value) ;
    this.studentForm.reset();
  }

remove(index:any){
    this.studentData.splice(index, 1);
}

}
