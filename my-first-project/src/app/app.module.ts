import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import{ MatGridListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import{MatButtonModule} from  '@angular/material';
import {Loginform1Component} from './loginform1/loginform1.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatSidenavModule,MatIconModule,MatListModule} from '@angular/material';
import { CrumComponent } from './crum/crum.component';
import {routingComponents} from './app-routing.module';
  import { from } from 'rxjs';
import { SolutionComponent } from './solution/solution.component';
import { ModuleComponent } from './module/module.component';
import { ColorComponent } from './color/color.component';
import { ProductionComponent } from './production/production.component';
import { PayrollComponent } from './payroll/payroll.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ColorNameComponent } from './color-name/color-name.component';
import { ColorCodeComponent } from './color-code/color-code.component';


@NgModule({
  declarations: [ 
    AppComponent,
    Loginform1Component, DashBoardComponent, CrumComponent, 
    SolutionComponent, ModuleComponent, ColorComponent, ProductionComponent, 
    PayrollComponent,SidenavComponent, ColorNameComponent, ColorCodeComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
     MatGridListModule ,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatSidenavModule,MatIconModule,MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

