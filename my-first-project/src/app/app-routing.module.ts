import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Loginform1Component } from './loginform1/loginform1.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {CrumComponent } from './crum/crum.component';
import { SolutionComponent } from './solution/solution.component';
import { ModuleComponent } from './module/module.component';
import { ColorComponent } from './color/color.component';
import { ProductionComponent } from './production/production.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ColorCodeComponent } from './color-code/color-code.component';
import { ColorNameComponent } from './color-name/color-name.component';

  import { from } from 'rxjs';

const routes: Routes = [{path :'',component : Loginform1Component},
                        {path :'login',component:Loginform1Component},
                        {path :'sidenav',component:SidenavComponent},
                        {path:'dash-board' ,component:DashBoardComponent,
                        children:[
                        {path:'',component:DashBoardComponent},
                        {path:'crum',component:CrumComponent },
                        {path:'solution', component: SolutionComponent},
                        {path:'module', component: ModuleComponent },
                        {path:'color', component: ColorComponent,
                        children:[
                        {path:'colorcode',component:ColorCodeComponent},
                        {path:'colorname',component:ColorNameComponent},
                      ]},
                        {path:'production', component: ProductionComponent},
                        {path:'payroll', component: PayrollComponent}

                        ]
  },                  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents={Loginform1Component,DashBoardComponent,CrumComponent, 
             SolutionComponent ,ModuleComponent ,ColorComponent,ProductionComponent,PayrollComponent}