import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'' ,component:LoginPageComponent},
  {path:'login' ,component:LoginPageComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthenticationGuard] , children:[
    {path:'createStudent' , component:CreateStudentComponent, canDeactivate:[NotifyGuard]},
    {path:'allStudents', component:AllStudentsComponent}
  ]},
  {path: '**' , component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
