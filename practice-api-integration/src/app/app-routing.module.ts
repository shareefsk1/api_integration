import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SbiBankComponent } from './sbi-bank/sbi-bank.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
{path:'' , component:LoginPageComponent},
{path:"dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard] ,children:[
{path:"vehicle", component:VehicleComponent},
{path:"createVehicle", component:CreateVehicleComponent},
{path:"sbi", component:SbiBankComponent},
{path:"ca", component:CreateAccountComponent}
],
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
