import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'' ,component:LoginPageComponent},
  {path:'login' ,component:LoginPageComponent},
  {path:'dashboard', component:DashboardComponent , children:[
    {path:'createStudent' , component:CreateStudentComponent},
    {path:'allStudents', component:AllStudentsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
