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

  constructor(private _formBuilder:FormBuilder){
      this.studentForm = _formBuilder.group({
        name:['', Validators.required]  ,
        fathername:['', Validators.required]  ,
        number:['', Validators.required],
        class: ['', Validators.required],
      })
  }

  submit(){
    this.studentData.push(this.studentForm.value) ;
    
  }

remove(index:any){
    this.studentData.splice(index, 1);
}

}
