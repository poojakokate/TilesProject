import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  number:number;
  name:any="user123";

  set(event:number)
  {
    this.number=event;
    switch(this.number){
        case 0:
                this.router.navigate(['/sidenav/crum']);
                break;
        case 1:
                this.router.navigate(['/sidenav/solution']);
                break;
        case 2:this.router.navigate(['/sidenav/module']);
                break;
        case 3:
                this.router.navigate(['/sidenav/mouldr-details']);
                break;
        case 4:this.router.navigate(['/sidenav/color-details']);
                break;
        case 5:this.router.navigate(['/sidenav/payroll-details']);
                break;
        default:alert("error");
    }
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
