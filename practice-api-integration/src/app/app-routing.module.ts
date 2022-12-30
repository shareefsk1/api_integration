import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SbiBankComponent } from './sbi-bank/sbi-bank.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
{path:'' , component:LoginPageComponent},
{path:"dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard] ,children:[
{path:"vehicle", component:VehicleComponent},
{path:"createVehicle", component:CreateVehicleComponent},
{path:"sbi", component:SbiBankComponent},
{path:"ca", component:CreateAccountComponent},
{path:'ce', component:CreateEmployeeComponent},
{path:'vehicel/:id' , component:VehicleDetailsComponent},
{path:'update/:id', component:CreateVehicleComponent}
],
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
